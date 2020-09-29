import express from "express";

const app = express();

app.use("/", express.static("src/resources/static/jquery-amiibo"));

app.get("/api/amiibo", (req, res) => {
  res.send("welcome in amiibo");
});

app.get("/api/type", (req, res) => {
  res.send("type here");
});

app.get("/api/amiiboseries", (req, res) => {
  res.send("amiiboseries here");
});

app.get("/api/character", (req, res) => {
  res.send("character here");
});

app.get("/api/gameseries", (req, res) => {
  res.send("gameseries here");
});

app.use("/", function (req, res, next) {
  res.status(404).sendFile(__dirname + "/404.png");
});

app.use("/", function (err, req, res, next) {
  res.status(500).send("Une erreur est survenue!");
});

app.listen(8888);
