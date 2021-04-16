const express = require("express");
const cors = require("cors");

const { database } = require("../database");
const { routes } = require("./routes");
const { errorHandler } = require("./error");

const app = express();

database.connect();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);

module.exports = {
  app,
};
