#include <iostream>
#include "../../lib/SQLiteCpp-master/sqlite3/sqlite3.h"
bool isTest = false;
#if !isTest
//#include "crow/crow_all.h"
#endif

static int callback(void* NotUsed, int argc, char** argv, char** azColName) {
    for (int i = 0; i < argc; i++) {
        std::cout << azColName[i] << " = " << (argv[i] ? argv[i] : "NULL") << std::endl;
    }
    return 0;
}
int main() {
    sqlite3* db;
    char* zErrMsg = 0;
    int rc;

    rc = sqlite3_open("C://Users/SoheilSystem/Downloads/x-ui.db", &db);

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
//    if (!isTest) {
//
//        std::cout << "Hello,!" << std::endl;
//        crow::SimpleApp app;

//     CROW_ROUTE(app, "/login")
//        .methods("GET"_method)
//        ([&](const crow::request& req, crow::response& res) {
//            loginHandler(req, res);
//        });
//        CROW_ROUTE(app, "/")([]() {
//            return "Hello world";
//        });
//        CROW_ROUTE(app, "/api/status")([]() {
//            crow::json::wvalue r({
//                                         {"cpu", "4%!"},
//                                         {"d", 54},
//                                         {"c", true}
//                                 });
//            return r;
//        });
//
//        app.port(443).multithreaded().run();
//
//    }

    return 0;
}
int time() {
    // Specify the timestamp in milliseconds
    long long timestamp = 1705929494000;

    // Convert the timestamp to time_t
    time_t unixTime = timestamp / 1000;

    // Convert time_t to struct tm
    struct tm* timeinfo = localtime(&unixTime);

    // Get the day from struct tm
    int day = timeinfo->tm_mday;
    return day;
}
//