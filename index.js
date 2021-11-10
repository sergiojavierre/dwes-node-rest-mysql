import express from "express";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import * as equiposController from "./controllers/equipos.controller.js";

app.get("/equipos", equiposController.getAll);
app.post("/equipos", equiposController.add);

app.listen(8080, () => {
  console.log("Server listening");
});
