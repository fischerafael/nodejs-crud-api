const { Router } = require("express");

const { userController } = require("../../../adapters/controllers/user");

const routes = Router();

routes.post("/", userController.create);
routes.get("/");
routes.get("/");
routes.patch("/");
routes.put("/");
routes.delete("/");

module.exports = {
  routes,
};
