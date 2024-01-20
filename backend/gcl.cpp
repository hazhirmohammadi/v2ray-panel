#include <iostream>
#include <fstream>
#include <filesystem>
#include <regex>
std::string extractNameFromConfig(const std::string& configURL) {
    size_t nameStart = configURL.find("#");
    if (nameStart != std::string::npos) {
        std::string name = configURL.substr(nameStart + 1);
        return name;
    }
    return "";
}
void replaceCharacter(std::string& str, char oldChar, char newChar) {
    for (size_t i = 0; i < str.length(); i++) {
        if (str[i] == oldChar) {
            str[i] = newChar;
        }
    }
}
int main() {
    std::string path = "G:/v2ray";
    std::regex vlessRegex("vless://([^@]+)@([^:]+):(\\d+)([^#]+)#Z-Mci-(\\w+)");
    std::string securityParams = "&security=tls&sni=gcore.com&fp=chrome&type=ws&path=/&host=zerxc.sbs";

    for (const auto& entry : std::filesystem::directory_iterator(path)) {
        std::ifstream file(entry.path());
        std::string line;
        std::string modifiedContent;

        while (std::getline(file, line)) {

        }

        file.close();

        std::ofstream outputFile(entry.path());
        outputFile << modifiedContent;
        outputFile.close();
    }

    return 0;
}
