const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: "String",
      required: true,
      min: 6,
      max: 25,
      unique: true,
    },
    email: {
      type: "String",
      required: true,
      max: 55,
      unique: true,
    },
    password: {
      type: "String",
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      dafault: "",
    },
    coverPicture: {
      type: String,
    },
    follwers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 255,
    },
    city: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },
    relationships: {
      type: Number,
      enum: [1, 2, 3],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
