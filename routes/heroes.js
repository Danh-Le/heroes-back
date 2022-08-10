const express = require("express");
const app = express();
const superHeroes = require("../superHeroes.json");

app.get("/", (req, res) => {
  res.json(superHeroes);
});

module.exports = app;
