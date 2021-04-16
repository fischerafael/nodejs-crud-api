const { userService } = require("../../../use-cases/user");

const userController = {
  async create(request, response, next) {
    try {
      const { body } = request;
      const { data } = await userService.create({ body });
      return response.status(201).json(data);
    } catch (error) {
      next(error);
    }
  },

  async find(request, response, next) {
    try {
      const { query } = request;
      const { data } = await userService.find({ query });
      return response.status(200).json(data);
    } catch (error) {
      next(error);
    }
  },

  async findOne(request, response, next) {
    try {
      const { params } = request;
      const { data } = await userService.findOne({ userId: params.user_id });
      return response.status(200).json(data);
    } catch (error) {
      next(error);
    }
  },

  async delete(request, response, next) {
    try {
      const { params, headers } = request;
      const { data } = await userService.delete({
        userId: params.user_id,
        authorization: headers.authorization,
      });
      return response.status(204).json(data);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = { userController };
