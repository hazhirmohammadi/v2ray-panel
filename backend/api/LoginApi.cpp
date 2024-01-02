//
// Created by SoheilSystem on 1/2/2024.
//

#include "LoginApi.h"

void LoginApi::loginHandler(const crow::request &req, crow::response &res) {
    std::string username = req.url_params.get("username");
    std::string password = req.url_params.get("password");

    // Check if username and password match
    if (users.count(username) && users[username] == password) {
        // Set session cookie
        res.add_header("Set-Cookie", "session=" + username);
        res.write("Login successful");
        res.end();
    } else {
        res.write("Invalid username or password");
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