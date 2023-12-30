const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    dob: { type: String, required: true },
    role: { type: String, required: true },
    location: { type: String, required: true },
    password: { type: String, required: true, min: 4, max: 10 },
    confirm_password: { type: String, required: true, min: 4, max: 10 },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("users", userSchema);

module.exports = {
  UserModel,
};
