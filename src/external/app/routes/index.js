const { Router } = require("express");

const { userController } = require("../../../adapters/controllers/user");

const routes = Router();

routes.post("/", userController.create);
routes.get("/", userController.find);
routes.get("/:user_id", userController.findOne);
routes.patch("/");
routes.put("/");
routes.delete("/:user_id", userController.delete);

module.exports = {
  routes,
};
