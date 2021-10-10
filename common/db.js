const mysql = require("mysql");

exports.connection = mysql.createConnection({
    host: "localhost",
    user: "inventario",
    password: "inventario",
    database: "inventario"
});
