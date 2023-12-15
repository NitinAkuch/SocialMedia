const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("Test", TestSchema);
