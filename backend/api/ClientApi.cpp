//
// Created by SoheilSystem on 1/5/2024.
//

#include "ClientApi.h"
#include "random"
#include "../../backend/db/DB.cpp"
#include "sstream"
DB db = DB("/usr/local/crow/b.db");
std::string db_path = "/usr/local/crow/b.db";
std::string _id (){
    std::random_device rd;
    std::mt19937 gen(rd());
    std::uniform_int_distribution<long long int > dis (100000000000l,999999999999l);
    long long g = dis(gen);
    std::string i ;
    std::stringstream stringstream;
    stringstream<< g;
    i = stringstream.str();
    if(db.userIdExists(i)) {
        while (true) {
            if (db.userIdExists(i)) {
                ++g;
            }
            else {
                std::stringstream s;
                stringstream<< g;
                i = s.str();
            }
        }
    }
    return i;
}
void ClientApi::adduHandler(const crow::request &req, crow::response &res) {
    // Retrieve the request body as a string
    std::string requestBody = req.body;

    // Parse the request body as JSON
    crow::json::rvalue bodyJson = crow::json::load(requestBody);
    user user;
    user.setName(bodyJson["name"].s());

    user.setId(_id());
    crow::json::wvalue w;
    user.setIsub(bodyJson["id"].s());
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
    DB d = DB(db_path);
    crow::json::wvalue arry;
    arry["user"]["name"] = "bgm";

    std::vector<crow::json::wvalue> a;
    a.push_back(arry);
    crow::json::wvalue j = crow::json::wvalue::list();
    if (d.getUsers(user,a)){

        j["status"] ["success"] = true;
        j["users"] ["list"] = crow::json::wvalue::list(d.list);
        res.write(j.dump());
    }else
    {
        j["status"] ["success"] = false;
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


