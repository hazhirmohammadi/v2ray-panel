//
// Created by SoheilSystem on 1/2/2024.
//

#include "ClientManager.h"


std::string ClientManager::msg(std::string) {
    return "";
}

void ClientManager::deleteUserHandler(const crow::request &req, crow::response &res) {
    std::string requestBody = req.body;

    // Parse the request body as JSON
    crow::json::rvalue bodyJson = crow::json::load(requestBody);
    crow::json::wvalue w;
    std::string id = bodyJson["id"].s();

        w["success"] = db.deleteUser(id);

}