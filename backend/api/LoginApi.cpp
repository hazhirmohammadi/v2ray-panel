//
// Created by SoheilSystem on 1/2/2024.
//

#include "LoginApi.h"
// http://localhost:8080/login?username=your_username&password=your_password
void LoginApi::loginHandler(const crow::request &req, crow::response &res) {

    std::string username = req.body["username"];
    std::string password = req.body["password"];
    // Check if username and password match
    if (users.count(username) && users[username] == password) {
        // Set session cookie
        res.code = 91;
        res.add_header("Set-Cookie", "session=" + username);

        res.write("{ \"success\": true, \"msg\": \"Login successful\", \"obj\": \"No IP Record\" }");
        res.end();
    } else {
        res.code = 0;
        res.write("{ \"success\": false, \"msg\": \"Invalid username or password\", \"obj\": \"No IP Record\" }");
        res.end();
    }
}

void LoginApi::check(const crow::request &req, crow::response &res) {
    bool b;
    std::string sessionCookie = req.get_header_value("Cookie");

    // Check if session cookie exists
    if (sessionCookie.find("session=") != std::string::npos) {
        std::string username = sessionCookie.substr(sessionCookie.find("session=") + 8);

        res.write("Protected content for user: " + username);
        res.end();
    } else {
        res.write("Access denied");
        res.end();
    }
}