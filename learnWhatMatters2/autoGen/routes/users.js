const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testing");
// hey node, get connected to mongodb through mongoose
// Created the DB

const userSchema = mongoose.Schema({
  userName: String,
  name: String,
  age: Number
});
// Creates Schema

module.exports = mongoose.model("user", userSchema);
// Creates Collection {one part of the whole DB (a db)}