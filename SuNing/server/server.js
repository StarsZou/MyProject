var http = require("http");
var querystring = require("querystring");
var sql = require("mysql");
// var abb = require("./cartData.js");
const methods = require("./methods.js");
var data, req, res;

var db = sql.createConnection({
    url: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "sn"
});
db.connect(function (err) {
    if (err) {
        console.log("连接失败");
        return;
    } else {
        console.log("连接成功");
    }
})
// sql_select();
// 数据查询
function sql_select(table, res1, callback) {
    var sql = "select * from " + table;
    db.query(sql, function (err, results) {
        if (callback) {
            callback(results, res1);
            return;
        }
        res1.write(JSON.stringify(results));
        res1.end()
    })

}
// 数据库插入
function sql_insert(name, Tel, password) {
    let sql = "INSERT INTO `user`(`name`, `Tel`, `password`) VALUES (?,?,?)";
    db.query(sql, [name, Tel, password], function (error, res) {
        console.log(res);
    })
}
var server = http.createServer(createHandler);
server.listen("4002", "10.20.159.166", function () {
    console.log("开启成功")
});

function createHandler(_req, _res) {
    req = _req;
    res = _res;
    req.on("data", dataHandler);
    req.on("end", endHandler);
}

function dataHandler(_data) {
    data = String(_data);
}

function endHandler() {
    res.writeHead(200, {
        "content-type": "text/html;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
    });
    var obj;
    var type = req.url.indexOf("?") > -1 ? req.url.split("?")[0] : req.url;
    type = type.slice(1);
    if (req.method.toLowerCase() === "get") {
        if (req.url.indexOf("?") > -1) {
            obj = querystring.parse(req.url.split("?")[1]);
        }
    } else if (req.method.toLowerCase() === "post") {
        try {
            obj = JSON.parse(data);
        } catch (e) {
            obj = querystring.parse(data);
        }
    } else {
        res.end();
        return;
    }
    switch (type) {
        case "login":
            sql_select("user", res, function (results, res1) {
                var a;
                results.forEach(function (item) {
                    if (item.password === obj.password && item.Tel === obj.Tel) {
                        a = {}
                        a.name = item.name;
                    }
                });
                console.log(results)
                if (a) {
                    res1.write(JSON.stringify(a));
                    res1.end();
                    return;
                }
                res1.end("账号或密码错误");

            })
            return;
        case "registe":
            sql_select("user", res, function (results, res1) {
                var flag = results.some(function (item) {
                    return item.Tel === obj.Tel
                })
                if (flag) {
                    res1.write("0");
                    // 该账户已被注册
                    res1.end();
                    return
                }
                console.log(obj)
                sql_insert(obj.name, obj.Tel, obj.password);
                res1.write("1");
                // 数据插入成功，点击跳转
                res1.end();
            })
        case "addshoppingList":
            methods.addshoppingList(res, obj)
            break;
        case "getShoppingList":
            methods.getShoppingList(res)
            break;
        case "getSomeGoods":
            methods.getSomeGoods(obj)
            break;
        case "changGoodsNum":
            methods.changGoodsNum(res, obj)
            break;
        case "deleteGoods":
            methods.deleteGoods(res, obj)
            break;
        case "selectGoods":
            methods.selectGoods(res, obj)
            break;
        case "changeSelectGoods":
            methods.changeSelectGoods(res, obj)
            break;
        case "getDatalist":
            methods.getDatalist(res);
            break;

    }
}