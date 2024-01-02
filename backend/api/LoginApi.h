//
// Created by SoheilSystem on 1/2/2024.
//

#ifndef BACKEND_LOGINAPI_H
#define BACKEND_LOGINAPI_H
#include "/../crow/crow_all.h"

class LoginApi {
    std::unordered_map<std::string, std::string> users = {
            {"bgm", "09146042182"},
            {"porya", "poryasong"},
    };
    void loginHandler(const crow::request& req, crow::response& res);

    void check(const crow::request& req, crow::response& res) ;

};


#endif //BACKEND_LOGINAPI_H
