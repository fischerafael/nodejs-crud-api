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
      savedUser,
    };
  },
};

module.exports = {
  userService,
};
