//
// Created by SoheilSystem on 1/2/2024.
//

#include "DB.h"
std::string DB::query(std::string) {
    sqlite3* db;
    char* zErrMsg = 0;
    int rc;

    rc = sqlite3_open("x.db", &db);

    if (rc) {
        std::cerr << "Can't open database: " << sqlite3_errmsg(db) << std::endl;
        return(0);
    } else {
        std::cout << "Opened database successfully" << std::endl;
    }

    const char* sql = "SELECT settings FROM inbounds WHERE id=1";

    rc = sqlite3_exec(db, sql, callback, 0, &zErrMsg);

    if (rc != SQLITE_OK) {
        std::cerr << "SQL error: " << zErrMsg << std::endl;
        sqlite3_free(zErrMsg);
    } else {
        std::cout << "Operation done successfully" << std::endl;
    }

    sqlite3_close(db);
}