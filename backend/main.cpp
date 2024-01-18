#include <iostream>
#include "sqlite3.h" // change to sqlite3.h for server else sqll3/sqlite3.h
#include "api/LoginApi.cpp"
#include "api/ClientApi.cpp"
#include "api/ClientManager.cpp"
bool isTest = false;
#if !isTest
#include "crow/crow_all.h"
#endif
void error (const crow::request& req, crow::response& res){
crow::json::wvalue j;
j["error"] = "aut error";
}
static int callback(void* NotUsed, int argc, char** argv, char** azColName) {
    for (int i = 0; i < argc; i++) {
        std::cout << azColName[i] << " = " << (argv[i] ? argv[i] : "NULL") << std::endl;
    }
    return 0;
}

int main() {
    sqlite3* db;
    char* zErrMsg = 0;
    int rc;

//    rc = sqlite3_open("C://Users/SoheilSystem/Downloads/x-ui.db", &db);
//
//    if (rc) {
//        std::cerr << "Can't open database: " << sqlite3_errmsg(db) << std::endl;
//        return(0);
//    } else {
//        std::cout << "Opened database successfully" << std::endl;
//    }
//
//    const char* sql = "SELECT settings FROM inbounds WHERE id=1";
//
//    rc = sqlite3_exec(db, sql, callback, 0, &zErrMsg);
//
//    if (rc != SQLITE_OK) {
//        std::cerr << "SQL error: " << zErrMsg << std::endl;
//        sqlite3_free(zErrMsg);
//    } else {
//        std::cout << "Operation done successfully" << std::endl;
//    }
//
//    sqlite3_close(db);
//  .....
LoginApi loginApi;

ClientApi clientApi;
ClientManager clientManager;
    if (!isTest) {
//    std::ofstream outputFile("crow.log");
//
//
//    std::streambuf* coutBuffer = std::cout.rdbuf();
//    std::cout.rdbuf(outputFile.rdbuf());

        std::cout << "Hello,!" << std::endl;
        crow::App<crow::CORSHandler> app;
  //      app.ssl_file("/root/cert.crt", "/root/private.key");
        auto& cors = app.get_middleware<crow::CORSHandler>();

        cors.prefix("/login").origin("http://localhost:5173");
        CROW_ROUTE(app, "/login")
        .methods("POST"_method)
        ([&](const crow::request& req, crow::response& res) {
            res.add_header("Access-Control-Allow-Origin", "localhost:5173");
            res.add_header("Access-Control-Allow-Methods", "GET, POST");
            res.add_header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            loginApi.loginHandler(req, res);

        });
        CROW_ROUTE(app, "/bgm")([]() {
            crow::json::wvalue d;
            std::vector<crow::json::wvalue> v;
            d["id"] ["inb"] = crow::json::wvalue::list(v);
            d["id"] ["isub"] = "305867475";

            return d;
        });
        CROW_ROUTE(app, "/c")
                .methods("GET"_method)
                        ([&](const crow::request& req, crow::response& res) {
                            loginApi.check(req, res);
                        });
        CROW_ROUTE(app, "/")([]() {
            return "Hello world";
        });
        CROW_ROUTE(app, "/inb")([]() {
            crow::json::wvalue d;
            std::vector<crow::json::wvalue> p;
            crow::json::wvalue i;
            i["i"] = "1";
            i["i"] = "2";
            p.push_back(i);
            d["inb"] = crow::json::wvalue::list(p);
            return d;
        });
        CROW_ROUTE(app, "/api/status")([]() {
            crow::json::wvalue r({
                                         {"cpu", "4%!"},
                                         {"d", 54},
                                         {"c", true}
                                 });
            return r;
        });

        CROW_ROUTE(app, "/add")
                .methods("POST"_method)
                        ([&](const crow::request& req, crow::response& res) {
                            if(loginApi.check(req,res)){
                                res.add_header("Access-Control-Allow-Origin", "localhost:5173");
                                res.add_header("Access-Control-Allow-Methods", "GET, POST");
                                res.add_header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                                clientApi.adduHandler(req, res);
                            }

                        });
        CROW_ROUTE(app, "/delete")
                .methods("POST"_method)
                        ([&](const crow::request& req, crow::response& res) {
                            if(loginApi.check(req,res)){
                                res.add_header("Access-Control-Allow-Origin", "localhost:5173");
                                res.add_header("Access-Control-Allow-Methods", "GET, POST");
                                res.add_header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                                clientManager.deleteUserHandler(req, res);
                            }

                        });
        CROW_ROUTE(app, "/get")
                .methods("POST"_method)
                        ([&](const crow::request& req, crow::response& res) {
                                                     res.add_header("Access-Control-Allow-Origin", "localhost:5173");
                            res.add_header("Access-Control-Allow-Methods", "GET, POST");
                            res.add_header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                            if(loginApi.check(req,res))
                            clientApi.getuHandler(req, res);

                        });
        CROW_ROUTE(app, "/users")
                .methods("GET"_method)
                        ([&](const crow::request& req, crow::response& res) {
                            res.add_header("Access-Control-Allow-Origin", "localhost:5173");
                            res.add_header("Access-Control-Allow-Methods", "GET, POST");
                            res.add_header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                            if(loginApi.check(req,res)) {
                                clientApi.getUsers(req, res);
                            }
                        });

        CROW_ROUTE(app, "/h")([]() {
            return "<!DOCTYPE html>\n"
                   "<html lang=\"en\">\n"
                   "<head>\n"
                   "  <meta charset=\"UTF-8\">\n"
                   "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n"
                   "  <title>Fireworks</title>\n"
                   "  <style>\n"
                   "    body {\n"
                   "      margin: 0;\n"
                   "      background: #020202;\n"
                   "      cursor: crosshair;\n"
                   "    }\n"
                   "    canvas {\n"
                   "      display: block;\n"
                   "    }\n"
                   "    h1 {\n"
                   "      position: absolute;\n"
                   "      top: 20%;\n"
                   "      left: 50%;\n"
                   "      transform: translate(-50%, -50%);\n"
                   "      color: #fff;\n"
                   "      font-family: \"Source Sans Pro\";\n"
                   "      font-size: 5em;\n"
                   "      font-weight: 900;\n"
                   "      -webkit-user-select: none;\n"
                   "      user-select: none;\n"
                   "    }\n"
                   "  </style>\n"
                   "</head>\n"
                   "<body>\n"
                   "  <h1>Happy Birthday [Hesti] i l u </h1>\n"
                   "  <canvas id=\"birthday\"></canvas>\n"
                   "\n"
                   "  <script>\n"
                   "    // helper functions\n"
                   "    const PI2 = Math.PI * 2;\n"
                   "    const random = (min, max) => Math.random() * (max - min + 1) + min | 0;\n"
                   "    const timestamp = _ => new Date().getTime();\n"
                   "\n"
                   "    // container\n"
                   "    class Birthday {\n"
                   "      constructor() {\n"
                   "        this.resize();\n"
                   "\n"
                   "        // create a lovely place to store the firework\n"
                   "        this.fireworks = [];\n"
                   "        this.counter = 0;\n"
                   "      }\n"
                   "\n"
                   "      resize() {\n"
                   "        this.width = canvas.width = window.innerWidth;\n"
                   "        let center = this.width / 2 | 0;\n"
                   "        this.spawnA = center - center / 4 | 0;\n"
                   "        this.spawnB = center + center / 4 | 0;\n"
                   "\n"
                   "        this.height = canvas.height = window.innerHeight;\n"
                   "        this.spawnC = this.height * .1;\n"
                   "        this.spawnD = this.height * .5;\n"
                   "      }\n"
                   "\n"
                   "      onClick(evt) {\n"
                   "        let x = evt.clientX || evt.touches && evt.touches[0].pageX;\n"
                   "        let y = evt.clientY || evt.touches && evt.touches[0].pageY;\n"
                   "\n"
                   "        let count = random(3, 5);\n"
                   "        for (let i = 0; i < count; i++) {\n"
                   "          this.fireworks.push(new Firework(\n"
                   "            random(this.spawnA, this.spawnB),\n"
                   "            this.height,\n"
                   "            x,\n"
                   "            y,\n"
                   "            random(0, 260),\n"
                   "            random(30, 110)\n"
                   "          ));\n"
                   "        }\n"
                   "\n"
                   "        this.counter = -1;\n"
                   "      }\n"
                   "\n"
                   "      update(delta) {\n"
                   "        ctx.globalCompositeOperation = 'hard-light';\n"
                   "        ctx.fillStyle = `rgba(20,20,20,${7 * delta})`;\n"
                   "        ctx.fillRect(0, 0, this.width, this.height);\n"
                   "\n"
                   "        ctx.globalCompositeOperation = 'lighter';\n"
                   "        for (let firework of this.fireworks) {\n"
                   "          firework.update(delta);\n"
                   "        }\n"
                   "\n"
                   "        // if enough time passed... create new new firework\n"
                   "        this.counter += delta * 3; // each second\n"
                   "        if (this.counter >= 1) {\n"
                   "          this.fireworks.push(new Firework(\n"
                   "            random(this.spawnA, this.spawnB),\n"
                   "            this.height,\n"
                   "            random(0, this.width),\n"
                   "            random(this.spawnC, this.spawnD),\n"
                   "            random(0, 360),\n"
                   "            random(30, 110)\n"
                   "          ));\n"
                   "          this.counter = 0;\n"
                   "        }\n"
                   "\n"
                   "        // remove the dead fireworks\n"
                   "        if (this.fireworks.length > 1000) {\n"
                   "          this.fireworks = this.fireworks.filter(firework => !firework.dead);\n"
                   "        }\n"
                   "      }\n"
                   "    }\n"
                   "\n"
                   "    class Firework {\n"
                   "      constructor(x, y, targetX, targetY, shade, offsprings) {\n"
                   "        this.dead = false;\n"
                   "        this.offsprings = offsprings;\n"
                   "\n"
                   "        this.x = x;\n"
                   "        this.y = y;\n"
                   "        this.targetX = targetX;\n"
                   "        this.targetY = targetY;\n"
                   "\n"
                   "        this.shade = shade;\n"
                   "        this.history = [];\n"
                   "      }\n"
                   "\n"
                   "      update(delta) {\n"
                   "        if (this.dead) return;\n"
                   "\n"
                   "        let xDiff = this.targetX - this.x;\n"
                   "        let yDiff = this.targetY - this.y;\n"
                   "        if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) { // is still moving\n"
                   "          this.x += xDiff * 2 * delta;\n"
                   "          this.y += yDiff * 2 * delta;\n"
                   "\n"
                   "          this.history.push({\n"
                   "            x: this.x,\n"
                   "            y: this.y\n"
                   "          });\n"
                   "\n"
                   "          if (this.history.length > 20) {\n"
                   "            this.history.shift();\n"
                   "          }\n"
                   "        } else {\n"
                   "          if (this.offsprings && !this.madeChilds) {\n"
                   "            let babies = this.offsprings / 2;\n"
                   "            for (let i = 0; i < babies; i++) {\n"
                   "              let targetX = this.x + this.offsprings * Math.cos(PI2 * i / babies) | 0;\n"
                   "              let targetY = this.y + this.offsprings * Math.sin(PI2 * i / babies) | 0;\n"
                   "\n"
                   "              birthday.fireworks.push(new Firework(this.x, this.y, targetX, targetY, this.shade, 0));\n"
                   "            }\n"
                   "          }\n"
                   "          this.madeChilds = true;\n"
                   "          this.history.shift();\n"
                   "        }\n"
                   "\n"
                   "        if (this.history.length === 0) {\n"
                   "          this.dead = true;\n"
                   "        } else if (this.offsprings) {\n"
                   "          for (let i = 0; this.history.length > i; i++) {\n"
                   "            let point = this.history[i];\n"
                   "            ctx.beginPath();\n"
                   "            ctx.fillStyle = 'hsl(' + this.shade + ',100%,' + i + '%)';\n"
                   "            ctx.arc(point.x, point.y, 1, 0, PI2, false);\n"
                   "            ctx.fill();\n"
                   "          }\n"
                   "        } else {\n"
                   "          ctx.beginPath();\n"
                   "          ctx.fillStyle = 'hsl(' + this.shade + ',100%,50%)';\n"
                   "          ctx.arc(this.x, this.y, 1, 0, PI2, false);\n"
                   "          ctx.fill();\n"
                   "        }\n"
                   "      }\n"
                   "    }\n"
                   "\n"
                   "    let canvas = document.getElementById('birthday');\n"
                   "    let ctx = canvas.getContext('2d');\n"
                   "\n"
                   "    let then = timestamp();\n"
                   "\n"
                   "    let birthday = new Birthday();\n"
                   "    window.onresize = () => birthday.resize();\n"
                   "    document.onclick = evt => birthday.onClick(evt);\n"
                   "    document.ontouchstart = evt => birthday.onClick(evt);\n"
                   "\n"
                   "    (function loop() {\n"
                   "      requestAnimationFrame(loop);\n"
                   "\n"
                   "      let now = timestamp();\n"
                   "      let delta = now - then;\n"
                   "\n"
                   "      then = now;\n"
                   "      birthday.update(delta / 1000);\n"
                   "    })();\n"
                   "  </script>\n"
                   "</body>\n"
                   "</html>";
        });

        app.port(300).multithreaded().run();
//    std::cout.rdbuf(coutBuffer);
//
//    outputFile.close();
    }

    return 0;
}

int time() {
    // Specify the timestamp in milliseconds
    long long timestamp = 1705929494000;

    // Convert the timestamp to time_t
    time_t unixTime = timestamp / 1000;

    // Convert time_t to struct tm
    struct tm* timeinfo = localtime(&unixTime);

    // Get the day from struct tm
    int day = timeinfo->tm_mday;
    return day;
}












