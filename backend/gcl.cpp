#include <iostream>
#include <fstream>
#include <filesystem>
#include <regex>

int main() {
    std::string path = "G://v2ray";
    std::regex vlessRegex("vless://([^@]+)@([^:]+):(\\d+)([^#]+)#Z-Mci-(\\w+)");
    std::string securityParams = "&security=tls&sni=gcore.com&fp=chrome&type=ws&path=/&host=zerxc.sbs";

    for (const auto& entry : std::filesystem::directory_iterator(path)) {
        if (entry.is_regular_file()) {
            std::ifstream file(entry.path());
            std::string line;
            std::string modifiedContent;

            while (std::getline(file, line)) {
                std::smatch match;
                if (std::regex_search(line, match, vlessRegex)) {
                    std::string id = match[1];
                    std::string address = match[2];
                    std::string port = match[3];
                    std::string name = match[4];

                    std::string modifiedLine = "vless://" + id + "@" + address + ":" + port + "?type=ws&path=/&security=tls&sni=gcore.com&fp=chrome&host=zerxc.sbs#" + name;
                    modifiedContent += modifiedLine + "\n";
                } else {
                    modifiedContent += line + "\n";
                }
            }

            file.close();

            std::ofstream outputFile(entry.path());
            outputFile << modifiedContent;
            outputFile.close();
        }
    }

    return 0;
}
