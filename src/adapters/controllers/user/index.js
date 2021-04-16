const { userService } = require("../../../use-cases/user");

const userController = {
  async create(request, response, next) {
    try {
      const { body } = request;
      const { savedUser } = await userService.create({ body });
      return response.status(201).json(savedUser);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = { userController };
