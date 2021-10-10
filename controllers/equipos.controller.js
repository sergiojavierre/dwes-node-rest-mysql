const database = require('../common/db')

exports.getAll = (req, res) => {
    database.connection.query('select * from equipos', (err, rows) => {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        }
        else {
            res.status(200).send(rows)
        }
    })
}

exports.add = (req, res) => {
    database.connection.query(`insert into equipos (nombre, ubicacion) values ('${req.body.nombre}','${req.body.ubicacion}')`, (err, rows) => {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        }
        else {
            res.status(200).send('Equipo añadido')
        }
    })
}