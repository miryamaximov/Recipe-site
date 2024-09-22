var myMongoose = require('mongoose')
var recipeModel = new myMongoose.Schema(
    {
        name: String,
        description: String,
        pic: String, 
        level: String,
        duration: String, 
        type: String,
        password: String,
        ingredients: Array
    }
)

var recipes = myMongoose.model('myRecipesName', recipeModel, "recipes")
module.exports = recipes
  