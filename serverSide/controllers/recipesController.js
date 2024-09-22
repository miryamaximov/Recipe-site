var express = require('express')
var route = express.Router()

var recipesList = require('../models/recipesModel')

//שליפת כל המתכונים
route.get('/getList', (req, res)=>{
    recipesList.find({}).then((data)=>res.json(data)).catch((err)=>console.log(err))
})

//שליפת מתכון לפי קוד - הקוד האוטמטי
route.get('/getRecipeById/:id', (req, res)=>{
    recipesList.find({_id: req.params.id})
    .then((data)=>{res.json(data)})
    .catch((err)=>console.log(err))
})

//מחיקת מתכון לפי הקוד שלו
//כל משתמש יכול למחוק רק מתכונים שהוא הכניס אבל המנהל יכול למחוק כל מתכון
//סיסמת מנהל היא 1234 
route.delete('/deleteById/:id/:pass', (req, res)=>{
    recipesList.findById(req.params.id).then((data)=>{
        if (data.password === req.params.pass || data.password === '1234')
        recipesList.deleteOne({_id: req.params.id}).then((data)=>{res.json(data)}).catch((err)=>console.log(err))
    else console.log('you can not delete this recipe...');
    }).catch((err)=>{console.log(err)})
})
  
//פונקציה להוספת מתכון
route.put('/addRecipe', (req, res)=>{
    let recipeToAdd = req.body
    recipesList.create(recipeToAdd)
    .then((data)=>{res.json(data)})
    .catch((err)=>{console.log(data)})
})

//עדכון מתכון לפי קוד
route.post('/updateById/:id', (req, res)=>{
    recipesList.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((data)=>{res.json(data)})
    .catch((err)=>{console.log(err)})
})

module.exports = route