//
// Created by SoheilSystem on 1/2/2024.
//

#ifndef BACKEND_CLIENTMANAGER_H
#define BACKEND_CLIENTMANAGER_H
#include "iostream"
#include "../../backend/crow/crow_all.h"

class ClientManager {
std::string msg(std::string);
public:
 void deleteUserHandler (const crow::request& req, crow::response& res);
};


#endif //BACKEND_CLIENTMANAGER_H
