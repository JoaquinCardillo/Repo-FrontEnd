const express = require('express')
const app = express()
const port = 3000

const products =[
{    
    id: 1,
    brand: "brand-name",
    price:50,
    model:"model-name",
    years:50,
    kms:50,
    fuel:"type-fuel",
    description:"car-description",
    photo:"photo/product-1.jpg",



},{    
    id: 2,
    brand: "brand-name",
    price:50,
    model:"model-name",
    years:50,
    kms:50,
    fuel:"type-fuel",
    description:"car-description",
    photo:"photo/product-2.jpg",



},{    
    id: 3,
    brand: "brand-name",
    price:50,
    model:"model-name",
    years:50,
    kms:50,
    fuel:"type-fuel",
    description:"car-description",
    photo:"photo/product-3.jpg",



},{    
    id: 1,
    brand: "brand-name",
    price:50,
    model:"model-name",
    years:50,
    kms:50,
    fuel:"type-fuel",
    description:"car-description",
    photo:"photo/product-4.jpg",



},{    
    id: 1,
    brand: "brand-name",
    price:50,
    model:"model-name",
    years:50,
    kms:50,
    fuel:"type-fuel",
    description:"car-description",
    photo:"photo/product-5.jpg",

}
]


app.get('/api/products', (req, res) => {
  res.send(products)
})

app.use("/",express.static("fe"))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
