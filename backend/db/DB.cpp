//
// Created by rezgar on 1/2/2024.
//

#include "DB.h"
#include "../sqll3/sqlite3.h"
DB::DB(std::string path) {
    this->path = path;
}

bool DB::addUser(user user){
    std::string name , isub , id;
    name = user.name;
    isub = user.isub;
    id = user.id;

    std::cout << "INSERT INTO client (id, isub, name) VALUES (" + id + ", '" + isub + "', '" + name + "')";

    return query("INSERT INTO client (id, isub, name) VALUES (" + id + ", '" + isub + "', '" + name + "')");

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


bool DB::query(std::string q) {
    sqlite3* db;
    char* zErrMsg = 0;
    int rc;

    rc = sqlite3_open(path.c_str(), &db);

    if (rc) {
        std::cerr << "Can't open database: " << sqlite3_errmsg(db) << std::endl;
        return false;
    } else {
        std::cout << "Opened database successfully" << std::endl;
    }

    sqlite3_stmt* stmt;
    rc = sqlite3_prepare_v2(db, q.c_str(), -1, &stmt, nullptr);

    if (rc != SQLITE_OK) {
        std::cerr << "Failed to prepare statement: " << sqlite3_errmsg(db) << std::endl;
        sqlite3_close(db);
        return false;
    }

    // ...

    sqlite3_finalize(stmt);
    sqlite3_close(db);
    return true;
}
bool DB::userExists(std::string name ) {

    sqlite3* db;
    std::string query = "SELECT COUNT(*) FROM client WHERE name = '" + name + "'";
    sqlite3_stmt* stmt;
    sqlite3_open(path.c_str(), &db);
    int rc = sqlite3_prepare_v2(db, query.c_str(), -1, &stmt, nullptr);

    if (rc != SQLITE_OK) {
        std::cerr << "Failed to prepare statement: " << sqlite3_errmsg(db) << std::endl;
        return false;
    }

    rc = sqlite3_step(stmt);

    if (rc == SQLITE_ROW) {
        int count = sqlite3_column_int(stmt, 0);
        if (count > 0) {
            sqlite3_finalize(stmt);
            return true;
        }
    }

    sqlite3_finalize(stmt);
    return false;
}
bool DB::userIdExists(std::string id) {
    sqlite3* db;
    std::string query = "SELECT COUNT(*) FROM client WHERE id = '" + id + "'";
    sqlite3_stmt* stmt;
    sqlite3_open(path.c_str(), &db);
    int rc = sqlite3_prepare_v2(db, query.c_str(), -1, &stmt, nullptr);

    if (rc != SQLITE_OK) {
        std::cerr << "Failed to prepare statement: " << sqlite3_errmsg(db) << std::endl;
        return false;
    }

    rc = sqlite3_step(stmt);

    if (rc == SQLITE_ROW) {
        int count = sqlite3_column_int(stmt, 0);
        if (count > 0) {
            sqlite3_finalize(stmt);
            return true;
        }
    }

    sqlite3_finalize(stmt);
    return false;
}

bool DB::getUsers(user user,std::vector<crow::json::wvalue> a) {
    sqlite3* db;
    sqlite3_stmt* stmt;

    // Open the database
    int rc = sqlite3_open(path.c_str(), &db);
    if (rc != SQLITE_OK) {
        std::cerr << "Cannot open database: " << sqlite3_errmsg(db) << std::endl;
        return false;
    }

    // Prepare the SQL statement
    const char* sql = "SELECT * FROM client";
    rc = sqlite3_prepare_v2(db, sql, -1, &stmt, nullptr);
    if (rc != SQLITE_OK) {
        std::cerr << "Cannot prepare statement: " << sqlite3_errmsg(db) << std::endl;
        return false;
    }

    // Execute the statement and fetch the rows
    while (sqlite3_step(stmt) == SQLITE_ROW) {
        // Access the columns of the current row
        int id = sqlite3_column_int(stmt, 0);
        const unsigned char* name = sqlite3_column_text(stmt, 1);

        // Do something with the data
        std::cout << "ID: " << id << ", Name: " << name << std::endl;
        crow::json::wvalue w;
        w["name"] = name;
        a.push_back(w);
    }

    // Finalize the statement and close the database
    sqlite3_finalize(stmt);
    sqlite3_close(db);

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
