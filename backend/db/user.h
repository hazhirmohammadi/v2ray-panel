//
// Created by SoheilSystem on 1/5/2024.
//

#ifndef BACKEND_USER_H
#define BACKEND_USER_H

#endif //BACKEND_USER_H
#include "iostream"
struct user{
    std::string name;
    std::string isub;
    std::string id;
public:
    void setName(std::string n){
        this->name = n;;
    }
    std::string getName (){return name;}
    void setIsub(std::string n){
        this->isub = n;;
    }
    std::string getIsub (){return isub;}
    void setId(std::string n){
        this->id = n;
    }
    std::string getId(){return id;}
};