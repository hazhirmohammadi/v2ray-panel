//
// Created by rezgar on 1/2/2024.
//

#ifndef BACKEND_DB_H
#define BACKEND_DB_H
#include "iostream"
//#include "../sqll3/sqlite3.h"
#include "sqlite3.h"
#include "../crow/crow_all.h"
#include "user.h"
static std::string r = "";

class DB {
    std::string path = "/etc/x-ui/x-ui.db";
    static int callback(void* NotUsed, int argc, char** argv, char** azColName) {
        for (int i = 0; i < argc; i++) {
            std::cout << azColName[i] << " = " << (argv[i] ? argv[i] : "NULL") << std::endl;
            r = (argv[i] ? argv[i] : "NULL");
        }
        return 0;
    }
public:
    bool secess= false;
    std::string  res;
    bool query (std::string q);
    std::string q (std::string q);
    void addClient(){}
    bool addUser(user user);
    void getUser(user user);
    bool userExists(std::string name);
    bool userIdExists(std::string id);
    DB(std::string path);
};


#endif //BACKEND_DB_H
