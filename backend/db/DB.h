//
// Created by SoheilSystem on 1/2/2024.
//

#ifndef BACKEND_DB_H
#define BACKEND_DB_H
#include "iostream"
#include "../sqll3/sqlite3.h"

class DB {
    static int callback(void* NotUsed, int argc, char** argv, char** azColName) {
        for (int i = 0; i < argc; i++) {
            std::cout << azColName[i] << " = " << (argv[i] ? argv[i] : "NULL") << std::endl;
        }
        return 0;
    }
    std::string query (std::string);
};


#endif //BACKEND_DB_H
