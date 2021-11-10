import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "inventario",
  password: "inventario",
  database: "inventario",
});

export { connection };
