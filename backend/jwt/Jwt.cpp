//
// Created by SoheilSystem on 1/7/2024.
//

#include "Jwt.h"

std::string Jwt::encode(const std::string &in) {

    std::string out;

    const std::string base64_chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    size_t val = 0;
    int bits = -6;
    const unsigned int b63 = 0x3F;

    for (size_t i = 0; i < in.length(); i++) {

        val = (val << 8) + in[i];

        bits += 8;

        while (bits >= 0) {

            out.push_back(base64_chars[(val >> bits) & b63]);
            bits -= 6;

        }
    }

    if (bits > -6) {

        out.push_back(base64_chars[((val << 8) >> (bits + 8)) & b63]);

    }

    while (out.size() % 4) {

        out.push_back('=');

    }

    return out;
}