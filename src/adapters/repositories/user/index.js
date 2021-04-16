const User = require("../../../external/database/User");

const userRepository = {
  async create(data) {
    const createdUser = await User.create(data);
    return {
      createdUser,
    };
  },

  async find({ limit, page }) {
    const users = await User.find()
      .limit(+limit)
      .skip(+limit * (+page - 1));

    return {
      users,
    };
  },

  async findOne({ key, value }) {
    const user = await User.findOne({ [key]: value });

    return {
      user,
    };
  },

  async findById(userId) {
    const user = await User.findById(userId);

    return {
      user,
    };
  },

  async findByIdAndUpdate(userId, data) {
    const user = await User.findByIdAndUpdate(userId, data, {
      new: true,
    });

    return {
      user,
    };
  },

  async findByIdAndRemove(userId) {
    const deletedUser = await User.findByIdAndRemove(userId);

    return {
      deletedUser,
    };
  },
};

module.exports = {
  userRepository,
};
