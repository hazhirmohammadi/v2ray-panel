#include <iostream>
#include <fstream>
#include <filesystem>
#include <string>

namespace fs = std::filesystem;

void modifyConfigFile(const std::string& filePath) {
    std::ifstream inputFile(filePath);
    std::string line, modifiedContent;

    while (std::getline(inputFile, line)) {
        if (line.find("vless://") != std::string::npos) {
            std::string modifiedLine = line;
            size_t typeStart = modifiedLine.find("?type=");
            size_t typeEnd = modifiedLine.find("&path=");

            // Modify the port to 443
            modifiedLine.replace(typeStart + 6, typeEnd - typeStart - 6, "ws");

            size_t addressStart = modifiedLine.find("@") + 1;
            size_t addressEnd = modifiedLine.find(":");
            // Modify the address to "gcore.com"
            modifiedLine.replace(addressStart, addressEnd - addressStart, "gcore.com");

            modifiedContent += modifiedLine + "\n";
        } else {
            modifiedContent += line + "\n";
        }
    }

    inputFile.close();

    std::ofstream outputFile(filePath);
    outputFile << modifiedContent;
    outputFile.close();
}
std::string extractNameFromConfig(const std::string& configURL) {
    size_t nameStart = configURL.find("#");
    if (nameStart != std::string::npos) {
        std::string name = configURL.substr(nameStart + 1);
        return name;
    }
    return "";
}
int main() {
    std::string configURL = "vless://fe89f7fd-1abe-4770-9835-c8720944da16@g.zerxc.sbs:2096?type=ws&path=%2F&security=none#zv-Rezgar";
    std::string configName = extractNameFromConfig(configURL);

    if (!configName.empty()) {
        std::cout << "Config name: " << configName << std::endl;
    } else {
        std::cout << "No config name found." << std::endl;
    }

    return 0;
}
