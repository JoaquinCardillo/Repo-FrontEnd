import express from 'express' //importamos express
import {agregarVehiculo, conectar, obtenerVehiculos } from './src/mysql_conector.js'
let todos

const app = express()//iniciamos express

app.listen('3000',function(){
        console.log("Aplicacion iniciada ")
})


app.set('views','./vistas')
app.set('view engine','pug')

app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))

app.get("/",function(req,res){
    /*res.send("Aplicacion todo va bien")*/
    
   
    todos = obtenerVehiculos()
    res.render('index',{titulo :'MotorSport', contactos:todos})
})


app.get('/agregar/:email/:brand/:model/:kms/:year/:fuel/:price/:photo/:description',function(req,res){
     let email = req.params.email
     let brand = req.params.brand
     let model = req.params.model
     let kms = req.params.kms
     let year = req.params.year
     let fuel = req.params.fuel
     let price = req.params.price
     let photo = req.params.photo
     let description = req.params.description
     agregarVehiculo(email,brand,model,kms,year,fuel,price,photo,description)
    //  res.redirect('/')

 })