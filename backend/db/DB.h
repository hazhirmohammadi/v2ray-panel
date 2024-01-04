//
// Created by SoheilSystem on 1/2/2024.
//

#ifndef BACKEND_DB_H
#define BACKEND_DB_H
#include "iostream"
#include "../sqll3/sqlite3.h"

class DB {
    std::string path = "/etc/x-ui/x-ui.db";
    static int callback(void* NotUsed, int argc, char** argv, char** azColName) {
        for (int i = 0; i < argc; i++) {
            std::cout << azColName[i] << " = " << (argv[i] ? argv[i] : "NULL") << std::endl;
        }
        return 0;
    }
public:
    std::string query (std::string q);
    DB(std::string path);
};


#endif //BACKEND_DB_H
