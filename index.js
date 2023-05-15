const express = require('express')
const app = express()
const port = 3000
// import {agregarVehiculo, conectar, obtenerAutos,obtenerMotos } from './mysql_conector.js'

const autos = [
    {
        id: 1,
        type:'car',
        brand: "TOYOTA",
        price: 150000,
        model: "COROLLA",
        years: 50,
        kms: 50,
        fuel: "gas",
        description: "car-description",
        photo: "assets/toyota_corolla.jpg",
    }, {
        id: 2,
        type:'car',
        brand: "HONDA",
        price: 125000,
        model: "CIVIC",
        years: 50,
        kms: 50,
        fuel: "electric",
        description: "car-description",
        photo: "assets/honda_civic.jpg",



    }, {
        id: 3,
        type:'car',
        brand: "FORD",
        price: 75000,
        model: "FIESTA",
        years: 50,
        kms: 50,
        fuel: "diesel",
        description: "car-description",
        photo: "assets/ford_fiesta.jpg",



    }, {
        id: 4,
        type:'car',
        brand: "CHEVROLET",
        price: 97000,
        model: "CRUZE",
        years: 50,
        kms: 50,
        fuel: "diesel",
        description: "car-description",
        photo: "assets/chevrolet_cruce.jpeg",



    }, {
        id: 5,
        type:'car',
        brand: "CITROEN",
        price: 64000,
        model: "C4",
        years: 50,
        kms: 50,
        fuel: "gas",
        description: "cc3_citroen.jpg",
        photo: "assets/c3_citroen.jpg",

    }
]

const motos = [{
    id: 500,
    type:'motorbike',
    email: "abc@outlook.com.ar",
    brand: "Honda",
    model: "Tornado",
    kms: 300000,
    year: 2015,
    price: 5999,
    fuel: "petrol",
    photo: "assets/honda_tornado.jpg",
    description: "Es una moto muy rendidora."
},
{
    id: 501,
    type:'motorbike',
    email: "abc@outlook.com.ar",
    brand: "Yamaha",
    model: "Fz-250",
    kms: 40000,
    year: 2017,
    price: 11999,
    fuel: "electric",
    photo: "assets/yamaha-fz.jpg",
    description: "Es una moto muy ecológica."
}];


app.get('/api/autoProducto', (req, res) => {
    res.send(autos);
});


app.get('/api/motoProducto', (req, res) => {
    res.send(motos);
});


app.use("/", express.static("fe"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

///////////////////////////////////////
app.get("/",function(req,res){
    autos = obtenerAutos()
    res.render('cars',{autos})
})

app.get("/",function(req,res){
    motos = obtenerMotos()
    res.render('bikes',{motos})
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