// const mongoose = require("mongoose");

// const UserSchema = mongoose.Schema({
//   name: String,
//   password: String,
//   email: { type: String, lowercase: true },
// });

// module.exports = mongoose.model("User", UserSchema);
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Other fields
});

const User = mongoose.model("User", UserSchema);

export default User;
