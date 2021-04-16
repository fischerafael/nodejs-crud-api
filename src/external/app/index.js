const express = require("express");

const { database } = require("../database");
const { routes } = require("./routes");
const { errorHandler } = require("./error");

const app = express();

database.connect();

app.use(express.json());
app.use(routes);
app.use(errorHandler);

module.exports = {
  app,
};
