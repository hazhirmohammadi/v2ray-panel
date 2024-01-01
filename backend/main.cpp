#include <iostream>
//#include "../../lib/SQLiteCpp-master/sqlite3/sqlite3.h"
#include "crow/crow_all.h"
int main() {
//    sqlite3 *db;

    std::cout << "Hello,!" << std::endl;
    crow::SimpleApp app;

    CROW_ROUTE(app, "/")([](){
        return "Hello world";
    });

    app.port(443).multithreaded().run();
    return 0;
}
