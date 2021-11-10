import { connection } from "../common/db.js";

const getAll = (req, res) => {
  connection.query("select * from equipos", (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(rows);
    }
  });
};

const add = (req, res) => {
  connection.query(
    `insert into equipos (nombre, ubicacion) values ('${req.body.nombre}','${req.body.ubicacion}')`,
    (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send("Equipo añadido");
      }
    }
  );
};

export { getAll, add };
