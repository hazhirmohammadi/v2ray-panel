# Distributed under the OSI-approved BSD 3-Clause License.  See accompanying
# file Copyright.txt or https://cmake.org/licensing for details.

cmake_minimum_required(VERSION 3.5)

file(MAKE_DIRECTORY
  "G:/c++/v2ray panel/backend/cmake-build-debug/_deps/asiocmake-src"
  "G:/c++/v2ray panel/backend/cmake-build-debug/_deps/asiocmake-build"
  "G:/c++/v2ray panel/backend/cmake-build-debug/_deps/asiocmake-subbuild/asiocmake-populate-prefix"
  "G:/c++/v2ray panel/backend/cmake-build-debug/_deps/asiocmake-subbuild/asiocmake-populate-prefix/tmp"
  "G:/c++/v2ray panel/backend/cmake-build-debug/_deps/asiocmake-subbuild/asiocmake-populate-prefix/src/asiocmake-populate-stamp"
  "G:/c++/v2ray panel/backend/cmake-build-debug/_deps/asiocmake-subbuild/asiocmake-populate-prefix/src"
  "G:/c++/v2ray panel/backend/cmake-build-debug/_deps/asiocmake-subbuild/asiocmake-populate-prefix/src/asiocmake-populate-stamp"
)

set(configSubDirs )
foreach(subDir IN LISTS configSubDirs)
    file(MAKE_DIRECTORY "G:/c++/v2ray panel/backend/cmake-build-debug/_deps/asiocmake-subbuild/asiocmake-populate-prefix/src/asiocmake-populate-stamp/${subDir}")
endforeach()
if(cfgdir)
  file(MAKE_DIRECTORY "G:/c++/v2ray panel/backend/cmake-build-debug/_deps/asiocmake-subbuild/asiocmake-populate-prefix/src/asiocmake-populate-stamp${cfgdir}") # cfgdir has leading slash
endif()
