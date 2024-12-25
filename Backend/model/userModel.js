const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\S+@\S+\.\S+$/i, // Ensure valid email format
    },
    mobile: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    role: {
      type: String,
      enum: ["YES", "NO", "Driver", "User"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("registerUser", userSchema);
module.exports = User;
