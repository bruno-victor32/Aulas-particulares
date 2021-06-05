const express =  require('express')
const routes = express.Router()

//Rotas
routes.get('/', function(req,res){
    return res.rendirect("/teachers")
})

routes.get('/teachers', function(req,res){
    return res.render("teachers/index")
})

routes.get('/students', function(req,res){
    return res.send("students")
})

module.exports = routes