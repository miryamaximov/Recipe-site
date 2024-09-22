var express = require('express')
var route = express.Router()

var usersList = require('../models/usersModel')
var middleWare = require('../MiddleWare/documentationUsres')
route.use(middleWare)

//שליפת רשימת כל המשתמשים
route.get('/getList', (req, res)=>{
usersList.find({})
.then((data)=>{res.json(data)})
.catch((err)=>{console.log(data)})
})

//הוספת משתמש
route.put('/addUser', (req, res)=>{
    let userToAdd = req.body
    usersList.create(userToAdd)
    .then((data)=>{res.json(data)}).catch((err)=>{console.log(err)})
})

//שליפת משתמש על ידי שם משתמש וסיסמא
route.get('/getUserByNameAndPassword/:name/:pass', (req, res)=>{
    usersList.find({name: req.params.name, password: req.params.pass})
    .then((data)=>{res.json(data)})
    .catch((err)=>{console.log(data)})
})


//הוספת מתכון למערך המתכונים האהובים
route.post('/updateFavoriteRecipe/:phone/:nameOfRecipe', async (req, res)=>{
    let obj = await 
        usersList.find({phone: req.params.phone})
        .then((data)=>{return data[0]})
        .catch((err)=>{console.log(data)})

   obj.favoriteRecipes.push(req.params.nameOfRecipe)
    usersList.findOneAndUpdate(obj._id, obj, {new:true})
    .then((data)=>{res.json(data)}).catch((err)=>{console.log(err)})
})

//שליפת שמות המתכונים שהמשתמש אוהב
route.get('/getFavoriteRecipeByIdUser/:id', (req, res)=>{
    usersList.find({_id: req.params.id}).
    then((data)=>{
        console.log(data);
        res.json(data[0].favoriteRecipes)})
    .catch((err)=>{console.log(err)})
})

module.exports = route
