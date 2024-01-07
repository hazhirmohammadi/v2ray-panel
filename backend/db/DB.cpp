//
// Created by rezgar on 1/2/2024.
//

#include "DB.h"
DB::DB(std::string path) {
    this->path = path;
}

void DB::addUser(user user){
    std::string name , isub , id;
    name = user.name;
    isub = user.isub;
    id = user.id;

    query("INSERT INTO client (id, isub, name) VALUES (" + id + ", '" + isub + "', '" + name + "')");


}

void DB::getUser(user user) {
    std::string name , isub , id;

    id = user.id;

    query("SELECT name FROM client WHERE id = " + id);
}

std::string DB::q( std::string q) {
    sqlite3* db;
    char* zErrMsg = 0;
    int rc;

    rc = sqlite3_open(path.c_str(), &db);

    if (rc) {
        std::cerr << "Can't open database: " << sqlite3_errmsg(db) << std::endl;
        return "";
        secess = false;
    } else {
        std::cout << "Opened database successfully" << std::endl;
    }

    sqlite3_stmt* stmt;
    rc = sqlite3_prepare_v2(db, q.c_str(), -1, &stmt, nullptr);

    if (rc != SQLITE_OK) {
        secess = false;
        std::cerr << "Failed to prepare statement: " << sqlite3_errmsg(db) << std::endl;
        sqlite3_close(db);
        return "";
    }

    rc = sqlite3_step(stmt);
    std::string result;

    if (rc == SQLITE_ROW) {
        int columnCount = sqlite3_column_count(stmt);

        for (int i = 0; i < columnCount; i++) {
            const unsigned char* colValue = sqlite3_column_text(stmt, i);
            if (colValue) {
                secess = true;
                result += reinterpret_cast<const char*>(colValue);
            }
        }
    } else if (rc != SQLITE_OK && rc != SQLITE_DONE) {
        std::cerr << "SQL error: " << sqlite3_errmsg(db) << std::endl;
    } else {
        std::cout << "Operation done successfully" << std::endl;
    }

    sqlite3_finalize(stmt);
    sqlite3_close(db);
    res = result;
    return result;
}


std::string DB::query(std::string q) {
    sqlite3* db;
    char* zErrMsg = 0;
    int rc;

    rc = sqlite3_open(path.c_str(), &db);

    if (rc) {
        std::cerr << "Can't open database: " << sqlite3_errmsg(db) << std::endl;
        return "";
    } else {
        std::cout << "Opened database successfully" << std::endl;
    }

    sqlite3_stmt* stmt;
    rc = sqlite3_prepare_v2(db, q.c_str(), -1, &stmt, nullptr);

    if (rc != SQLITE_OK) {
        std::cerr << "Failed to prepare statement: " << sqlite3_errmsg(db) << std::endl;
        sqlite3_close(db);
        return "";
    }

    // ...

    sqlite3_finalize(stmt);
    sqlite3_close(db);
    res = result;
    return result;
}

//int main() {
//DB db("G://c++/v2ray panel/backend");
//user user;
//user.setId("d");
//user.setName("d");
//user.setIsub("d");
//db.addUser(user);
//    return 0;
//};
