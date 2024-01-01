# Distributed under the OSI-approved BSD 3-Clause License.  See accompanying
# file Copyright.txt or https://cmake.org/licensing for details.

cmake_minimum_required(VERSION 3.5)

file(MAKE_DIRECTORY
  "G:/c++/v2ray panel/backend/cmake-build-debug/_deps/asio-src"
  "G:/c++/v2ray panel/backend/cmake-build-debug/_deps/asio-build"
  "G:/c++/v2ray panel/backend/cmake-build-debug/_deps/asio-subbuild/asio-populate-prefix"
  "G:/c++/v2ray panel/backend/cmake-build-debug/_deps/asio-subbuild/asio-populate-prefix/tmp"
  "G:/c++/v2ray panel/backend/cmake-build-debug/_deps/asio-subbuild/asio-populate-prefix/src/asio-populate-stamp"
  "G:/c++/v2ray panel/backend/cmake-build-debug/_deps/asio-subbuild/asio-populate-prefix/src"
  "G:/c++/v2ray panel/backend/cmake-build-debug/_deps/asio-subbuild/asio-populate-prefix/src/asio-populate-stamp"
)

set(configSubDirs )
foreach(subDir IN LISTS configSubDirs)
    file(MAKE_DIRECTORY "G:/c++/v2ray panel/backend/cmake-build-debug/_deps/asio-subbuild/asio-populate-prefix/src/asio-populate-stamp/${subDir}")
endforeach()
if(cfgdir)
  file(MAKE_DIRECTORY "G:/c++/v2ray panel/backend/cmake-build-debug/_deps/asio-subbuild/asio-populate-prefix/src/asio-populate-stamp${cfgdir}") # cfgdir has leading slash
endif()
