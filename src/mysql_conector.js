import mysql from "mysql"
let autos;
let motos;

const conector = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"motorsport",        
    }
)
 
const conectar = () => {
    conector.connect(err => {
        if(err) throw err
        console.log('conectado')
    })
}

const agregarVehiculo = (type, email, brand, model, kms, year,fuel,price,photo,description) => {
    const sql = `INSERT INTO stock (id, type, email, brand, model, kms, year, fuel, price, photo, description) VALUES (null,'${type}'  '${email}', '${brand}', '${model}', '${kms}', '${year}', '${fuel}', '${price}', '${photo}', '${description}')`;
conector.query(sql, function(err, result, filed){
        if(err) throw err
        console.log(result)
    })

} 



export const obtenerAutos =()=>{
    const sql = 'SELECT * FROM stock WHERE type=car '
    conector.query(sql, function(err, result, filed){
        autos=result
    })
    return autos
}

export const obtenerMotos =()=>{
    const sql = 'SELECT * FROM stock WHERE type=motorbike '
    conector.query(sql, function(err, result, filed){
        motos=result
    })
    return motos
}

export{conectar,agregarVehiculo}
