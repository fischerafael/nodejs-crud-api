const express = require("express");

const { database } = require("../database");

const app = express();

database.connect();

app.use(express.json());

module.exports = {
  app,
};
