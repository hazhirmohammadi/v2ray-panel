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

    user.setIsub(w.dump());
    db.addUser(user);

    w["in"]= db.secess;
    res.write(w.dump());
    res.write(db.res);
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