var express = require('express');
var router = express.Router();

const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.2:27017/testingendgame2");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  secret: String
});

// Use passport-local-mongoose plugin
userSchema.plugin(plm);


module.exports = mongoose.model("user", userSchema);  // Use "User" as the model name (capitalized)
