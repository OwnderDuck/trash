// H2K4W - Heartbeat to KeyboardLED for Windows
// 将系统压力映射到键盘 ScrollLock 指示灯
// 版本 0.2.0（含 mspt 显示）

#define WIN32_LEAN_AND_MEAN
#include <windows.h>
#include <pdh.h>
#include <pdhmsg.h>
#include <cstdio>
#include <iostream>
#include <chrono>
#include <thread>
#include <cmath>
#include <algorithm>
#include <vector>

#pragma comment(lib, "pdh.lib")
#pragma comment(lib, "user32.lib")

#define H2K4WVER "0.2.0"

// ==================== 全局状态 ====================
static volatile bool g_alive = true;
static HANDLE g_consoleHandle = nullptr;
static bool g_hasConsole = false;

// ==================== 控制台处理 ====================
BOOL WINAPI ConsoleHandler(DWORD dwCtrlType) {
    if (dwCtrlType == CTRL_C_EVENT || dwCtrlType == CTRL_CLOSE_EVENT) {
        g_alive = false;
        return TRUE;
    }
    return FALSE;
}

void InitConsole() {
    // 尝试附加到父进程控制台（如果是从 cmd 启动）
    if (AttachConsole(ATTACH_PARENT_PROCESS)) {
        g_hasConsole = true;
        // 重定向标准输出到控制台
        FILE* fp;
        freopen_s(&fp, "CONOUT$", "w", stdout);
        freopen_s(&fp, "CONOUT$", "w", stderr);
        std::ios::sync_with_stdio();
    } else {
        g_hasConsole = false;
    }
    // 设置控制台控制处理程序（捕获 Ctrl+C）
    SetConsoleCtrlHandler(ConsoleHandler, TRUE);
}

// ==================== 系统监控模块 ====================
static PDH_HQUERY g_diskQuery = nullptr;
static PDH_HCOUNTER g_cpuCounter = nullptr;
static PDH_HCOUNTER g_diskTimeCounter = nullptr;
static PDH_HCOUNTER g_diskQueueCounter = nullptr;
static bool g_pdhInit = false;

// CPU 使用率（需要两次采样，这里返回上次与本次的差值，第一次返回 0）
static ULONGLONG g_lastIdle = 0, g_lastKernel = 0, g_lastUser = 0;
static bool g_firstCpu = true;

// 初始化所有性能计数器
void InitSystemMonitor() {
    PDH_STATUS status;

    // 打开查询
    status = PdhOpenQuery(nullptr, 0, &g_diskQuery);
    if (status != ERROR_SUCCESS) return;

    // 添加 CPU 总使用率计数器（English 版本）
    status = PdhAddEnglishCounter(g_diskQuery, L"\\Processor(_Total)\\% Processor Time", 0, &g_cpuCounter);
    if (status != ERROR_SUCCESS) return;

    // 添加磁盘使用率计数器（_Total 涵盖所有物理磁盘）
    status = PdhAddEnglishCounter(g_diskQuery, L"\\PhysicalDisk(_Total)\\% Disk Time", 0, &g_diskTimeCounter);
    if (status != ERROR_SUCCESS) return;

    // 添加磁盘队列长度计数器
    status = PdhAddEnglishCounter(g_diskQuery, L"\\PhysicalDisk(_Total)\\Current Disk Queue Length", 0, &g_diskQueueCounter);
    if (status != ERROR_SUCCESS) return;

    // 收集初始数据
    PdhCollectQueryData(g_diskQuery);
    g_pdhInit = true;

    // 预热 CPU（第一次调用返回 0）
    GetCpuUsage();
}

// CPU 使用率（0-100）
int GetCpuUsage() {
    if (!g_pdhInit) return 0;

    PDH_FMT_COUNTERVALUE value;
    PdhCollectQueryData(g_diskQuery);
    if (PdhGetFormattedCounterValue(g_cpuCounter, PDH_FMT_DOUBLE, nullptr, &value) == ERROR_SUCCESS) {
        return (int)std::round(value.doubleValue);
    }
    return 0;
}

// 内存使用率（0-100）
int GetRamUsage() {
    MEMORYSTATUSEX memStatus;
    memStatus.dwLength = sizeof(memStatus);
    if (!GlobalMemoryStatusEx(&memStatus)) return 0;
    return (int)memStatus.dwMemoryLoad;
}

// 磁盘使用率（0-100）
int GetDiskUsage() {
    if (!g_pdhInit) return 0;
    PDH_FMT_COUNTERVALUE value;
    PdhCollectQueryData(g_diskQuery);
    if (PdhGetFormattedCounterValue(g_diskTimeCounter, PDH_FMT_LONG, nullptr, &value) == ERROR_SUCCESS) {
        return (int)value.longValue;
    }
    return 0;
}

// 磁盘队列长度
double GetDiskQueueLength() {
    if (!g_pdhInit) return 0.0;
    PDH_FMT_COUNTERVALUE value;
    PdhCollectQueryData(g_diskQuery);
    if (PdhGetFormattedCounterValue(g_diskQueueCounter, PDH_FMT_DOUBLE, nullptr, &value) == ERROR_SUCCESS) {
        return value.doubleValue;
    }
    return 0.0;
}

// ==================== 体验值计算 ====================
static double g_smoothedIndex = 50.0;

int CalculateExperience(int cpu, int disk, int ram, double diskQueue) {
    // 磁盘压力：队列每增加1，相当于额外增加20%压力（上限100）
    double diskPressure = std::min(100.0, (double)disk + diskQueue * 20.0);

    // 加权综合：CPU 40%, 磁盘(含队列) 40%, 内存 20%
    double raw = cpu * 0.4 + diskPressure * 0.4 + ram * 0.2;

    // 峰值补偿：如果磁盘压力超过90或内存超过95，强制拉高到至少85
    if (diskPressure > 90.0 || ram > 95) {
        raw = std::max(raw, 85.0);
    }

    // 指数平滑（alpha=0.2 可调）
    const double alpha = 0.2;
    g_smoothedIndex = alpha * raw + (1.0 - alpha) * g_smoothedIndex;

    return (int)std::round(g_smoothedIndex);
}

// ==================== LED 控制 ====================
bool ToggleLockKey(BYTE virtualKey) {
    INPUT ip = {};
    ip.type = INPUT_KEYBOARD;
    ip.ki.wVk = virtualKey;

    if (SendInput(1, &ip, sizeof(INPUT)) != 1) return false;
    ip.ki.dwFlags = KEYEVENTF_KEYUP;
    if (SendInput(1, &ip, sizeof(INPUT)) != 1) return false;
    return true;
}

bool SetLockKey(BYTE virtualKey, bool desiredState) {
    bool currentState = (GetKeyState(virtualKey) & 1) != 0;
    if (currentState == desiredState) return true;
    return ToggleLockKey(virtualKey);
}

// ==================== 主程序 ====================
int main() {
    InitConsole();  // 尝试附加到控制台

    printf("\n");
    printf(" ██╗     ██████╗ ██╗  ██╗   \n");
    printf(" ██║     ╚════██╗██║ ██╔╝   Heartbeat 2 KeyboardLED v%s\n", H2K4WVER);
    printf(" ██║      █████╔╝█████╔╝    Windows version\n");
    printf(" ██║     ██╔═══╝ ██╔═██╗    Github: OwnderDuck/H2K4W\n");
    printf(" ███████╗███████╗██║  ██╗\n");
    printf(" ╚══════╝╚══════╝╚═╝  ╚═╝\n\n");

    if (g_hasConsole) {
        printf("Running in console mode. Press Ctrl+C to exit.\n");
    } else {
        // 无控制台时，可考虑显示一个消息框或托盘图标
        // 这里静默运行
    }

    // 初始化系统监控
    InitSystemMonitor();
    if (!g_pdhInit) {
        if (g_hasConsole) printf("Failed to initialize performance counters.\n");
        return 1;
    }

    // 主循环参数
    const int threshold = 91;          // 体验值超过此值灯常亮
    const int baseInterval = 184;      // 体验值=1%时的闪烁周期（单位：10ms）
    int tick = 0;
    bool state = false;
    auto nextTick = std::chrono::steady_clock::now();
    long long loopDurationNs = 0;      // 用于存储每次循环的实际耗时（纳秒）

    // 预热采样（确保第一次采样后有有效值）
    Sleep(1000);

    while (g_alive) {
        auto tickStart = std::chrono::steady_clock::now();
        tick++;

        // 每 32 个 tick（约 320ms）采集一次新数据
        if (tick % 32 == 0) {
            int cpu = GetCpuUsage();
            int disk = GetDiskUsage();
            int ram = GetRamUsage();
            double queue = GetDiskQueueLength();

            int exp = CalculateExperience(cpu, disk, ram, queue);
            double mspt = loopDurationNs / 1000.0;  // 纳秒转微秒

            if (g_hasConsole) {
                // 显示实时数据（包含 MSPT）
                printf("\rCPU:%3d%% Disk:%3d%% RAM:%3d%% Queue:%.1f Exp:%3d MSPT:%6.2fus   ",
                       cpu, disk, ram, queue, exp, mspt);
                fflush(stdout);
            }

            // 根据体验值决定闪烁逻辑
            if (exp > 0 && exp <= threshold) {
                int interval = baseInterval - (exp * baseInterval / threshold);
                if (interval < 2) interval = 2;

                bool shouldBeOn = (tick % interval == 0);
                if (shouldBeOn != state) {
                    state = shouldBeOn;
                    SetLockKey(VK_SCROLL, state);
                }
            } else if (exp > threshold) {
                if (!state) {
                    state = true;
                    SetLockKey(VK_SCROLL, true);
                }
            } else {
                if (state) {
                    state = false;
                    SetLockKey(VK_SCROLL, false);
                }
            }
        }

        // 固定 10ms 心跳
        nextTick += std::chrono::milliseconds(10);
        std::this_thread::sleep_until(nextTick);

        // 记录本次循环实际耗时（用于下一次显示 MSPT）
        auto tickEnd = std::chrono::steady_clock::now();
        loopDurationNs = std::chrono::duration_cast<std::chrono::nanoseconds>(tickEnd - tickStart).count();
    }

    // 退出前关闭灯
    SetLockKey(VK_SCROLL, false);
    if (g_hasConsole) printf("\nExiting.\n");

    return 0;
}
