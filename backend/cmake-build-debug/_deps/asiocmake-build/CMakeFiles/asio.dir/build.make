# CMAKE generated file: DO NOT EDIT!
# Generated by "MinGW Makefiles" Generator, CMake Version 3.25

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

SHELL = cmd.exe

# The CMake executable.
CMAKE_COMMAND = "C:\Program Files\JetBrains\CLion 2023.1\bin\cmake\win\x64\bin\cmake.exe"

# The command to remove a file.
RM = "C:\Program Files\JetBrains\CLion 2023.1\bin\cmake\win\x64\bin\cmake.exe" -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = "G:\c++\v2ray panel\backend"

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = "G:\c++\v2ray panel\backend\cmake-build-debug"

# Include any dependencies generated for this target.
include _deps/asiocmake-build/CMakeFiles/asio.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include _deps/asiocmake-build/CMakeFiles/asio.dir/compiler_depend.make

# Include the progress variables for this target.
include _deps/asiocmake-build/CMakeFiles/asio.dir/progress.make

# Include the compile flags for this target's objects.
include _deps/asiocmake-build/CMakeFiles/asio.dir/flags.make

_deps/asiocmake-build/CMakeFiles/asio.dir/src/asio.cpp.obj: _deps/asiocmake-build/CMakeFiles/asio.dir/flags.make
_deps/asiocmake-build/CMakeFiles/asio.dir/src/asio.cpp.obj: _deps/asiocmake-build/CMakeFiles/asio.dir/includes_CXX.rsp
_deps/asiocmake-build/CMakeFiles/asio.dir/src/asio.cpp.obj: _deps/asiocmake-src/src/asio.cpp
_deps/asiocmake-build/CMakeFiles/asio.dir/src/asio.cpp.obj: _deps/asiocmake-build/CMakeFiles/asio.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir="G:\c++\v2ray panel\backend\cmake-build-debug\CMakeFiles" --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object _deps/asiocmake-build/CMakeFiles/asio.dir/src/asio.cpp.obj"
	cd /d "G:\c++\v2ray panel\backend\cmake-build-debug\_deps\asiocmake-build" && C:\PROGRA~1\JETBRA~1\CLION2~1.1\bin\mingw\bin\G__~1.EXE $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT _deps/asiocmake-build/CMakeFiles/asio.dir/src/asio.cpp.obj -MF CMakeFiles\asio.dir\src\asio.cpp.obj.d -o CMakeFiles\asio.dir\src\asio.cpp.obj -c "G:\c++\v2ray panel\backend\cmake-build-debug\_deps\asiocmake-src\src\asio.cpp"

_deps/asiocmake-build/CMakeFiles/asio.dir/src/asio.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/asio.dir/src/asio.cpp.i"
	cd /d "G:\c++\v2ray panel\backend\cmake-build-debug\_deps\asiocmake-build" && C:\PROGRA~1\JETBRA~1\CLION2~1.1\bin\mingw\bin\G__~1.EXE $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E "G:\c++\v2ray panel\backend\cmake-build-debug\_deps\asiocmake-src\src\asio.cpp" > CMakeFiles\asio.dir\src\asio.cpp.i

_deps/asiocmake-build/CMakeFiles/asio.dir/src/asio.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/asio.dir/src/asio.cpp.s"
	cd /d "G:\c++\v2ray panel\backend\cmake-build-debug\_deps\asiocmake-build" && C:\PROGRA~1\JETBRA~1\CLION2~1.1\bin\mingw\bin\G__~1.EXE $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S "G:\c++\v2ray panel\backend\cmake-build-debug\_deps\asiocmake-src\src\asio.cpp" -o CMakeFiles\asio.dir\src\asio.cpp.s

# Object files for target asio
asio_OBJECTS = \
"CMakeFiles/asio.dir/src/asio.cpp.obj"

# External object files for target asio
asio_EXTERNAL_OBJECTS =

_deps/asiocmake-build/libasio.a: _deps/asiocmake-build/CMakeFiles/asio.dir/src/asio.cpp.obj
_deps/asiocmake-build/libasio.a: _deps/asiocmake-build/CMakeFiles/asio.dir/build.make
_deps/asiocmake-build/libasio.a: _deps/asiocmake-build/CMakeFiles/asio.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir="G:\c++\v2ray panel\backend\cmake-build-debug\CMakeFiles" --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX static library libasio.a"
	cd /d "G:\c++\v2ray panel\backend\cmake-build-debug\_deps\asiocmake-build" && $(CMAKE_COMMAND) -P CMakeFiles\asio.dir\cmake_clean_target.cmake
	cd /d "G:\c++\v2ray panel\backend\cmake-build-debug\_deps\asiocmake-build" && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles\asio.dir\link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
_deps/asiocmake-build/CMakeFiles/asio.dir/build: _deps/asiocmake-build/libasio.a
.PHONY : _deps/asiocmake-build/CMakeFiles/asio.dir/build

_deps/asiocmake-build/CMakeFiles/asio.dir/clean:
	cd /d "G:\c++\v2ray panel\backend\cmake-build-debug\_deps\asiocmake-build" && $(CMAKE_COMMAND) -P CMakeFiles\asio.dir\cmake_clean.cmake
.PHONY : _deps/asiocmake-build/CMakeFiles/asio.dir/clean

_deps/asiocmake-build/CMakeFiles/asio.dir/depend:
	$(CMAKE_COMMAND) -E cmake_depends "MinGW Makefiles" "G:\c++\v2ray panel\backend" "G:\c++\v2ray panel\backend\cmake-build-debug\_deps\asiocmake-src" "G:\c++\v2ray panel\backend\cmake-build-debug" "G:\c++\v2ray panel\backend\cmake-build-debug\_deps\asiocmake-build" "G:\c++\v2ray panel\backend\cmake-build-debug\_deps\asiocmake-build\CMakeFiles\asio.dir\DependInfo.cmake" --color=$(COLOR)
.PHONY : _deps/asiocmake-build/CMakeFiles/asio.dir/depend

