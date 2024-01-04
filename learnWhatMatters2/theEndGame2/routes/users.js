const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.01:27017/testingendgame2");

const userSchema = mongoose.Schema({
  username: String,
  nickname: String,
  description: String,
  categories: {
    type: Array,
    default: []
  },
  //can also be written as categories: [],
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("user", userSchema);