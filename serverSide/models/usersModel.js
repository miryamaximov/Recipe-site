var myMongoose = require("mongoose");
var userModel = new myMongoose.Schema({
  name: String,
  password: String,
  address: String,
  phone: String,
  isManager: Boolean,
  favoriteRecipes: Array,
});

var users = myMongoose.model("myUsersName", userModel, "users");
module.exports = users;
