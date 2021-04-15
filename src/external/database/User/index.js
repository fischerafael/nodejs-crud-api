const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    email: { type: String, required: true, lowercase: true },
    username: { type: String, required: true, lowercase: true },
    password: { type: String, required: true },
    birthYear: { type: Number, required: true },
    isPremium: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", Schema);
