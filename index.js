const express = require('express')

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const equiposController = require('./controllers/equipos.controller')

app.get('/equipos', equiposController.getAll)
app.post('/equipos', equiposController.add)

app.listen(8080, () => {
    console.log('Server listening')
})