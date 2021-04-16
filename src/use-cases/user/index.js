const { user } = require("../../entities/user");

const User = require("../../external/database/User");

const userService = {
  async create({ body }) {
    const { email, username, password, birthYear, isPremium } = body;
    if (!email || !username || !password || !birthYear || !isPremium)
      throw new Error("Missing params");

    const hasEmail = await User.findOne({ email: body.email });
    if (hasEmail) throw new Error("Email already being used");

    const hasUsername = await User.findOne({ username: body.username });
    if (hasUsername) throw new Error("Username already being used");

    const userData = user.create(body);

    const savedUser = await User.create(userData);

    return {
      data: savedUser,
    };
  },

  async find({ query }) {
    const { limit, page } = query;

    const users = await User.find()
      .limit(+limit)
      .skip(+limit * (+page - 1));

    const sanitizedUsers = users.map((user) => {
      return { _id: user.id, email: user.email, birthYear: user.birthYear };
    });

    return {
      data: sanitizedUsers,
    };
  },

  async findOne({ userId }) {
    const user = await User.findById(userId);
    if (!user) throw new Error("Not found");

    const sanitizedUser = {
      _id: user._id,
      email: user.email,
      birthYear: user.birthYear,
      isPremium: user.isPremium,
    };

    return {
      data: sanitizedUser,
    };
  },

  async delete({ userId, authorization }) {
    if (userId !== authorization) throw new Error("Unauthorized");

    const deletedUser = await User.findByIdAndRemove(userId);
    if (!deletedUser) throw new Error("Not found");

    return {
      data: deletedUser,
    };
  },
};

module.exports = {
  userService,
};
