//
// Created by SoheilSystem on 1/5/2024.
//

#ifndef BACKEND_CLIENTAPI_H
#define BACKEND_CLIENTAPI_H
#include "../../backend/crow/crow_all.h"

class ClientApi {
public:
    void adduHandler (const crow::request& req, crow::response& res);
    void getuHandler (const crow::request& req, crow::response& res);
};


#endif //BACKEND_CLIENTAPI_H
