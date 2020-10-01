import path from "path";
import express from "express";
import createRoutes from "./routes";
import dataImportES6 from "./import/ES6";

const dataLoadedSuccess = () => {
  const app = express();
  const port = "8888";

  app.set("view engine", "ejs");

  app.set("views", path.join(__dirname, "resources/ejsViews/"));

  app.use("/", express.static("src/resources/static/jquery-amiibo"));
  app.use("/", createRoutes());
  app.use("/", (req, res) => {
    res.render("index", { port: port });
  });

  app.use("/", function (req, res, next) {
    res.status(404).sendFile(__dirname + "/404.png");
  });

  app.use("/", function (err, req, res, next) {
    res.status(500).send("Une erreur est survenue!");
  });
  console.log("server started");

  app.listen(port);
};

const dataLoadedError = () => {
  console.log("An error occured loading datas");
};

dataImportES6.load(dataLoadedSuccess, dataLoadedError);
