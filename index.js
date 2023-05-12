import express from 'express' //importamos express
import { agregarContacto, obtenerContactos } from './src/mysql_conector.js'
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
    todos = obtenerContactos()
    res.render('index',{titulo :'aplicacion de contactos', contactos:todos})
})
app.get('/agregar/:nombre/:numero',function(req,res){
    let nombre=req.params.nombre
    let numero=req.params.numero
    agregarContacto(numero,nombre)
    res.redirect('/')

    console.log(nombre, numero)
})