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
std::string replaceCharacter(const std::string& str, const std::string& oldStr, const std::string& newStr) {
    std::string result = str;
    size_t pos = result.find(oldStr);
    while (pos != std::string::npos) {
        result.replace(pos, oldStr.length(), newStr);
        pos = result.find(oldStr, pos + newStr.length());
    }
    return result;
}
void changeconfigs (){
    using namespace std;
    std::string path = "G:/v2ray";
    std::regex vlessRegex("vless://([^@]+)@([^:]+):(\\d+)([^#]+)#Z-Mci-(\\w+)");
    std::string securityParams = "&security=tls&sni=gcore.com&fp=chrome&type=ws&path=/&host=zerxc.sbs";

    for (const auto& entry : std::filesystem::directory_iterator(path)) {
        std::ifstream file(entry.path());
        std::string line;
        std::string modifiedContent;

        while (std::getline(file, line)) {
            string d =replaceCharacter(line,"g.zerxc.sbs","pa5-speedtest.tools.gcore.com");
            string f = replaceCharacter(d,"2096","443");
            string name = extractNameFromConfig(line);
            string tls = replaceCharacter(f,"type=ws&path=%2F&security=none","path=%2F&security=tls&encryption=none&alpn=h2,http/1.1&host=v2rayztm.com&fp=chrome&type=ws&sni=pa5-speedtest.tools.gcore.com");
//            string delname = replaceCharacter(delname,name,"");
            modifiedContent += tls;
        }

        file.close();

        std::ofstream outputFile(entry.path());
        outputFile << modifiedContent;
        outputFile.close();
    }
}
int main() {
        using namespace std;
//        std::string path = "G:/v2ray";
//        std::regex vlessRegex("vless://([^@]+)@([^:]+):(\\d+)([^#]+)#Z-Mci-(\\w+)");
//        std::string securityParams = "&security=tls&sni=gcore.com&fp=chrome&type=ws&path=/&host=zerxc.sbs";
//
//        for (const auto& entry : std::filesystem::directory_iterator(path)) {
//            std::ifstream file(entry.path());
//            std::string line;
//            std::string modifiedContent;
//
//            while (std::getline(file, line)) {
//
//                string tls = replaceCharacter(line,"path=%2F&security=tls&encryption=none&alpn=h2,http/1.1&host=v2rayztm.com&fp=chrome&type=ws&sni=pa5-speedtest.tools.gcore.com","path=%2F&security=tls&encryption=none&alpn=h2,http/1.1&host=v2rayztm.com&fp=chrome&type=ws&sni=gcore.com");
////            string delname = replaceCharacter(delname,name,"");
//                modifiedContent += tls;
//            }
//
//            file.close();
//
//            std::ofstream outputFile(entry.path());
//            outputFile << modifiedContent;
//            outputFile.close();
//        }

changeconfigs();
    return 0;
}
