const { userRepository } = require("../../adapters/repositories/user");
const { user } = require("../../entities/user");

const userService = {
  async create({ body }) {
    const { email, username, password, birthYear, isPremium } = body;
    if (!email || !username || !password || !birthYear || !isPremium)
      throw new Error("Missing params");

    const { user: hasEmail } = await userRepository.findOne({
      key: "email",
      value: email,
    });
    if (hasEmail) throw new Error("Email already being used");

    const { user: hasUsername } = await userRepository.findOne({
      key: "username",
      value: username,
    });
    if (hasUsername) throw new Error("Username already being used");

    const userData = user.validate(body);

    const { createdUser } = await userRepository.create(userData);

    return {
      data: createdUser,
    };
  },

  async find({ query }) {
    const { limit, page } = query;

    const { users } = await userRepository.find({ limit, page });

    const sanitizedUsers = users.map((user) => {
      return { _id: user.id, email: user.email, birthYear: user.birthYear };
    });

    return {
      data: sanitizedUsers,
    };
  },

  async findOne({ userId }) {
    const { user } = await userRepository.findById(userId);
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

  async update({ userId, body }) {
    const { user: hasEmail } = await userRepository.findOne({
      key: "email",
      value: body.email,
    });
    if (hasEmail) throw new Error("Email already being used");

    const { user: hasUsername } = await userRepository.findOne({
      key: "username",
      value: body.username,
    });
    if (hasUsername) throw new Error("Username already being used");

    const validUserData = user.validate(body);

    const { user: updatedUser } = await userRepository.findByIdAndUpdate(
      userId,
      validUserData
    );
    if (!updatedUser) throw new Error("Not found");

    return {
      data: updatedUser,
    };
  },

  async replace({ userId, body }) {
    const { email, username, password, birthYear, isPremium } = body;
    if (!email || !username || !password || !birthYear || !isPremium)
      throw new Error("Missing params");

    const { user: hasEmail } = await userRepository.findOne({
      key: "email",
      value: body.email,
    });
    if (hasEmail) throw new Error("Email already being used");

    const { user: hasUsername } = await userRepository.findOne({
      key: "username",
      value: body.username,
    });
    if (hasUsername) throw new Error("Username already being used");

    const validUserData = user.validate(body);

    const { user: updatedUser } = await userRepository.findByIdAndUpdate(
      userId,
      validUserData
    );
    if (!updatedUser) throw new Error("Not found");

    return {
      data: updatedUser,
    };
  },

  async delete({ userId, authorization }) {
    if (userId !== authorization) throw new Error("Unauthorized");

    const { deletedUser } = await userRepository.findByIdAndRemove(userId);
    if (!deletedUser) throw new Error("Not found");

    return {
      data: deletedUser,
    };
  },
};

module.exports = {
  userService,
};
