cmake_minimum_required(VERSION 3.25)
project(backend)

set(CMAKE_CXX_STANDARD 17)
#set(ROOT_ROOT ../../lib/boost)
#add_subdirectory(../../lib/boost build)
#add_executable(backend main.cpp)
find_package(Boost 1.55.0 COMPONENTS system) # Specify the Boost components you need
include_directories(${Boost_INCLUDE_DIRS})
add_executable(backend ${SOURCE_FILES} main.cpp ../../lib/SQLiteCpp-master/sqlite3/sqlite3.h ../../lib/SQLiteCpp-master/sqlite3/sqlite3.c)
target_link_libraries(backend ${Boost_LIBRARIES})

#include(FetchContent)
#FetchContent_Declare(asiocmake GIT_REPOSITORY "https://github.com/OlivierLDff/asio.cmake" GIT_TAG "main")
#FetchContent_MakeAvailable(asiocmake)

# Link your target with the ASIO library
#target_link_libraries(backend PRIVATE asio::asio)

#add_definitions(-DBOOST_ERROR_CODE_HEADER_ONLY)
#file(GLOB SOURCES "../../lib/boost/*.hpp")
#add_executable(BOOST ${SOURCES})
#add_library(../../lib/SQLiteCpp-master/src)
#add_subdirectory(../../lib/SQLiteCpp-master/src)
#set_property(TARGET curlpp PROPERTY IMPORTED_LOCATION ./vendor/curlpp/libcurlpp.a)
#target_link_libraries(my_target curlpp)
