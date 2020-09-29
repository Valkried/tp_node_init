import express from "express";
import createRoutes from "./routes";
import dataImportES6 from "./import/ES6";

const app = express();

app.use("/", express.static("src/resources/static/jquery-amiibo"));

app.use("/", createRoutes());

app.use("/", function (req, res, next) {
  res.status(404).sendFile(__dirname + "/404.png");
});

app.use("/", function (err, req, res, next) {
  res.status(500).send("Une erreur est survenue!");
});

app.listen(8888);

dataImportES6.load();
