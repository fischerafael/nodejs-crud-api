const user = {
  create({ email, username, password, birthYear, isPremium }) {
    if (!email.includes("@")) throw new Error("Invalid email");
    if (email.length < 6) throw new Error("Invalid email");

    if (username.length < 6) throw new Error("Invalid username");

    if (password.length < 6) throw new Error("Invalid password");

    if (birthYear > 2003) throw new Error("User should be at least 18");

    const user = {
      email,
      username,
      password,
      birthYear,
      isPremium,
    };
    return user;
  },
};

module.exports = {
  user,
};
