#include <fstream>
#include <iostream>
#include <filesystem>
#include <string>
#include <algorithm>
#include <future>
#include <queue>
#include <vector>
#include "webview.h"
#include "tinyfiledialogs.h"
#define TINYFILEDIALOGS_IMPLEMENTATION
#include <unordered_set>

#include "tinyfiledialogs.c"
using namespace  std;
namespace fs = filesystem;
struct GhostFile {
    std::string name;
    std::string path;
    int days;
    int year;
    fs::file_time_type last_write;
    bool operator<(const GhostFile& other) const {
        return last_write < other.last_write;
    }
};
#include <sys/stat.h> // 用于 Windows 的属性检测

bool isHidden(const fs::path& p) {
    // 1. Linux/macOS: 以 "." 开头的隐藏文件
    string filename = p.filename().string();
    if (filename.length() > 1 && filename[0] == '.') {
        return 1;
    }

    // 2. Windows: 检查隐藏属性
#ifdef _WIN32
    DWORD attributes = GetFileAttributesW(p.c_str());
    if (attributes != INVALID_FILE_ATTRIBUTES && (attributes & FILE_ATTRIBUTE_HIDDEN)) {
        return 1;
    }
#endif

    return 0;
}
bool isIgnored(const std::string& path) {
    // 黑名单关键词列表
    static const std::vector<std::string> blacklist = {
        "cache", "temp", "tmp", "logs", ".git", ".vs", "obj", "bin"
    };

    for (const auto& word : blacklist) {
        // 如果路径中包含这些词，直接视为缓存
        if (path.find(word) != std::string::npos) {
            return 1;
        }
    }
    return 0;
}

bool isWeirdFile(const std::string& name, const std::string& path) {
    // 1. 过滤超长文件名 (例如超过 128 字符)
    if (name.length() > 128) return true;

    // 2. 过滤包含奇怪字符的文件
    // 如果文件名包含非 ASCII 且非 UTF-8 常见的控制字符，则视为奇怪
    for (unsigned char c : name) {
        // 过滤掉不可见的控制字符 (ASCII 0-31)
        if (c < 32 && c != '\t') return true;
        // 过滤掉 Windows/Linux 路径中的非法字符
        if (c == '<' || c == '>' || c == ':' || c == '"' || c == '|' || c == '?' || c == '*') return true;
    }

    return false;
}
static const unordered_set<string> YY_EXTENSIONS = {
    // 文档类
    ".docx", ".doc", ".txt", ".md", ".pdf", ".rtf", ".odt", ".epub", ".wps",

    // 图像与设计类
    ".jpg", ".jpeg", ".png", ".psd", ".ai", ".fig", ".sketch", ".cdr", ".svg", ".eps", ".tiff", ".bmp", ".heic",

    // 代码与开发类
    ".cpp", ".h", ".py", ".js", ".java", ".rs", ".c", ".css", ".html", ".htm", ".go", ".rb", ".php", ".ts", ".json", ".xml", ".yaml", ".toml", ".ini",

    // 媒体类
    ".mp4", ".mov", ".wav", ".mp3", ".flac", ".aac", ".m4a", ".ogg", ".avi", ".mkv",

    // 压缩与归档类
    ".zip", ".rar", ".7z", ".tar", ".gz",

    // 专业工程/创作类
    ".dwg", ".dxf", ".blend", ".obj", ".fbx", ".prproj", ".aep", ".mid", ".midi"
};
bool isYYFile(const fs::path& p) {
    if (!p.has_extension()) return false;

    // 获取扩展名并转为小写，确保匹配大小写不敏感
    std::string ext = p.extension().string();
    std::transform(ext.begin(), ext.end(), ext.begin(), ::tolower);

    // 检查是否存在于白名单中
    return YY_EXTENSIONS.find(ext) != YY_EXTENSIONS.end();
}
string escapeString(const string& input) {
    string output;
    for (char c : input) {
        if (c == '\\') output += "\\\\";
        else if (c == '\"') output += "\\\"";
        else if (c == '\'') output += "\\'";
        else output += c;
    }
    return output;
}
void scanFiles(webview::webview &w, std::string path, double years_threshold) {
    auto cleanPath = [](std::string str) {
        std::string result;
        for (char c : str) {
            if (c != '\"' && c != '\'' && c != '[' && c != ']') {
                result += c;
            }
        }
        return result;
    };

    fs::path p(cleanPath(path));
    cout << "开始扫描目录: " << p << endl;
    // 大顶堆，存的是 limit 个“最新”的文件，最后剩下的就是 limit 个“最旧”的
    std::priority_queue<GhostFile> pq;

    auto now = std::chrono::system_clock::now();
    // 转换为秒的 threshold
    auto threshold_seconds = std::chrono::seconds(static_cast<long>(years_threshold * 365.25 * 24 * 3600));

    try {
        for (const auto& entry : fs::recursive_directory_iterator(p, fs::directory_options::skip_permission_denied)) {

            if (isIgnored(entry.path().string())) {continue;}
            if (isHidden(entry.path())) {continue;}
            if (isWeirdFile(entry.path().filename().string(), entry.path().string())) {continue;}
            if (!isYYFile(entry.path())) {continue; }
            if (entry.is_regular_file()) {
                //cout << "找到文件: " << entry.path().filename().string();
                auto ftime = entry.last_write_time();
                auto sctp = std::chrono::time_point_cast<std::chrono::system_clock::duration>(
                    ftime - fs::file_time_type::clock::now() + std::chrono::system_clock::now()
                );
                auto age = now - sctp;
                if (age > threshold_seconds) {
                    //cout<<" OK";
                    int days = std::chrono::duration_cast<std::chrono::hours>(age).count() / 24;
                    GhostFile gf = {
                        escapeString(fs::relative(entry.path(), p).string())/*entry.path().filename().string()*/,
                        entry.path().string(),
                        days,
                        2026, // 可根据 sctp 获取具体年份
                        ftime
                    };

                    pq.push(gf);

                }
                //cout<<endl;
            }
        }
    } catch (const fs::filesystem_error& e) {
        // 记录错误
    }

    // 将优先队列中的元素转存到 vector 并按时间正序排列（最旧的在前面）
    std::vector<GhostFile> result;
    while (!pq.empty()) {
        result.push_back(pq.top());
        pq.pop();
    }
    std::reverse(result.begin(), result.end());

    // 发送给前
    for (const auto& g : result) {
        // 构造 JSON 数据，注意要转义引号
        std::string name_esc = escapeString(g.name);
        std::string json = "{\"name\":\"" + name_esc +
                           "\", \"days\":" + std::to_string(g.days) +
                           ", \"year\":" + std::to_string(g.year) + "}";

        //cout << "发送给前端的 JSON: " << json << endl;
        w.dispatch([&w, json]() {
            w.eval("window.renderGhostData(" + json + ");");
        });
    }
}
int main() {
    //tinyfd_messageBox("测试弹窗", "如果你能看到这行字，说明库链接没问题", "ok", "info", 0);
    webview::webview w( true, nullptr);
    w.set_title("File R.I.P. - 文件超度器");
    w.set_size(800, 600, WEBVIEW_HINT_NONE);
    w.bind("do_scan", [&w](std::string params) -> std::string {
        size_t delimiter = params.find('|');
        std::string path = params.substr(0, delimiter);
        double sleepYears = std::stod(params.substr(delimiter + 1));

        std::thread([&w, path, sleepYears]() {
            scanFiles(w, path, sleepYears);
        }).detach();
        return "";
    });
    w.bind("select_folder", [&w](string _) -> string {
        // 异步
        thread([&w]() {
            const char* path = tinyfd_selectFolderDialog("选择文件夹", NULL);
            string result = path ? string(path) : "";

            // 2. 使用 dispatch 将结果安全地传回 UI 线程并执行 JS
            // escape_string 必须提前处理好路径字符
            string escapedPath = escapeString(result);
            w.dispatch([&w, escapedPath]() {
                // 在前端执行 JS 回调函数，把路径传回去
                w.eval("window.onFolderSelected('" + escapedPath + "');");
            });
        }).detach(); // 分离线程，让它在后台自己跑

        // 3. 这里直接返回空字符串，让 bind 立即结束，UI 线程立刻恢复响应
        return "";
    });

    w.navigate("file://" + fs::absolute("/home/frog/CLionProjects/File-R.I.P./index.html").string());

    w.run();

    return 0;
}
