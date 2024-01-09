//
// Created by SoheilSystem on 1/5/2024.
//

#include "ClientApi.h"

#include "../../backend/db/DB.cpp"

DB db = DB("/usr/local/crow/b.db");

void ClientApi::adduHandler(const crow::request &req, crow::response &res) {
    // Retrieve the request body as a string
    std::string requestBody = req.body;

    // Parse the request body as JSON
    crow::json::rvalue bodyJson = crow::json::load(requestBody);
    user user;
    user.setName(bodyJson["name"].s());
    user.setId(bodyJson["id"].s());
    crow::json::wvalue w;
    user.setIsub("1");
    if (db.addUser(user)){
        w["in"] = true;
    } else {
        w["in"] = false;
    }


    res.write(w.dump());
    res.write(db.res);
    res.end();
}

void ClientApi::getUsers(const crow::request &req, crow::response &res) {
    user user;
    crow::json::wvalue arry;
    arry["user"]["name"] = "bgm";

    std::vector<crow::json::wvalue> a;
    a.push_back(arry);
    if (db.getUsers(user,a)){
        crow::json::wvalue j = crow::json::wvalue::list(a);
        res.write(j.dump());
    }

    res.end();

}
void ClientApi::getuHandler(const crow::request &req, crow::response &res) {
    std::string requestBody = req.body;

    // Parse the request body as JSON
    crow::json::rvalue bodyJson = crow::json::load(requestBody);
    user user;
    user.setName(bodyJson["name"].s());
    user.setId(bodyJson["id"].s());
    res.write(db.res);
    res.end();
}
//