
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes")
const server = express() 

server.use(express.static('public'))
server.use(routes)

server.set("view engine","njk")

nunjucks.configure("views",{/*vou pedir para o nunjucks configurar na pasta views e vou usar o express e a variavel que eu vou usar no express e o server*/
    express:server,
    autoescape:false,
    noCache:true
})

server.listen(5000,function(){/*O servidor vai ficar ouvindo uma porta,que será a 5000.Callback geralmente e uma função que passa dentro de outra função então o primeiro parametro e um número e o segundo parametro e uma função*/
    console.log("server is running")/*Essa função vai ser executada assim que for chamado a porta 5000*/
})