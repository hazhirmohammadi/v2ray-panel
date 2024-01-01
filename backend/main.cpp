#include <iostream>
//#include "../../lib/SQLiteCpp-master/sqlite3/sqlite3.h"
bool isTest = false;
#if !isTest
#include "crow/crow_all.h"
#endif

int main() {
//    sqlite3 *db;

//    if (!isTest) {
//
//        std::cout << "Hello,!" << std::endl;
//        crow::SimpleApp app;
//
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
