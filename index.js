const express = require('express')
const app = express()
const port = 3000

const autos =[
{    
    id: 1,
    brand: "TOYOTA",
    price:150000,
    model:"COROLLA",
    years:50,
    kms:50,
    fuel:"gas",
    description:"car-description",
    photo:"assets/toyota_corolla.jpg",
},{    
    id: 2,
    brand: "HONDA",
    price:125000,
    model:"CIVIC",
    years:50,
    kms:50,
    fuel:"electric",
    description:"car-description",
    photo:"assets/honda_civic.jpg",



},{    
    id: 3,
    brand: "FORD",
    price:75000,
    model:"FIESTA",
    years:50,
    kms:50,
    fuel:"diesel",
    description:"car-description",
    photo:"assets/ford_fiesta.jpg",



},{    
    id: 4, 
    brand:"CHEVROLET",
    price:97000,
    model:"CRUZE",
    years:50,
    kms:50,
    fuel:"diesel",
    description:"car-description",
    photo:"assets/chevrolet_cruce.jpeg",



},{    
    id: 5,
    brand: "CITROEN",
    price:64000,
    model:"C4",
    years:50,
    kms:50,
    fuel:"gas",
    description:"cc3_citroen.jpg",
    photo:"assets/c3_citroen.jpg",

}
]

const motos = [{
    id: 500,
    email: "abc@outlook.com.ar",
    brand: "Toyota",
    model: "RS-500",
    kms: 300000,
    year: 2015,
    price: 5999,
    fuel: "petrol",
    photo:"fe\assets\moto.jpg",
    description:"Es una moto muy rendidora."
  },
  {
    id: 501,
    email: "abc@outlook.com.ar",
    brand: "Toyota",
    model: "RS-501",
    kms: 40000,
    year: 2017,
    price: 11999,
    fuel: "electric",
    photo:"fe\assets\moto1.jpg",
    description:"Es una moto muy ecológica."
  }];







app.get('/api/products', (req, res) => {
  res.send(motos);
});

app.get('/api/products', (req, res) => {
    res.send(autos);
});

app.use("/",express.static("fe"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
