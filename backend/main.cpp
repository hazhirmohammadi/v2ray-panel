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
