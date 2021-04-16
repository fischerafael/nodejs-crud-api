const user = {
  validate(data) {
    if (data.email) {
      if (!data.email.includes("@")) throw new Error("Invalid email");
      if (data.email.length < 6) throw new Error("Invalid email");
    }

    if (data.username) {
      if (data.username.length < 6) throw new Error("Invalid username");
    }

    if (data.password) {
      if (data.password.length < 6) throw new Error("Invalid password");
    }

    if (data.birthYear) {
      if (data.birthYear > 2003) throw new Error("User should be at least 18");
    }

    return data;
  },
};

module.exports = {
  user,
};
