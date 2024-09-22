var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser());
var path = require("path");
app.use(express.static(path.join(__dirname, "public")));
var myMongoose = require("mongoose");
myMongoose.connect("mongodb://localhost:27017/project", { useNewUrlParser: true, useUnifiedTopology: true });
var db = myMongoose.connection
var cors = require('cors')
app.use(cors())
db.on('open', ()=>{
    console.log("The data base of the project is open!");
})

app.listen(1607, () => {
  console.log("The server of the project is running!");
});


var usersController = require('./controllers/usersController')
app.use('/users', usersController)

var recipesController = require('./controllers/recipesController')
app.use('/recipes', recipesController)