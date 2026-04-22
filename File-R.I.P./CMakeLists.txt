cmake_minimum_required(VERSION 3.16)

project(File_RIP LANGUAGES CXX)

set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(PkgConfig REQUIRED)
pkg_check_modules(GTK3 REQUIRED IMPORTED_TARGET gtk+-3.0)
pkg_check_modules(WEBKIT REQUIRED IMPORTED_TARGET webkit2gtk-4.0)

add_executable(File_RIP File_RIP.cpp webview.h
        tinyfiledialogs.h
        tinyfiledialogs.c)

target_include_directories(File_RIP PRIVATE
        ${CMAKE_CURRENT_SOURCE_DIR}
)

target_link_libraries(File_RIP PRIVATE
        PkgConfig::GTK3
        PkgConfig::WEBKIT
)
