import mysql from "mysql"
let todos

const conector = mysql.createConnection(
    {
        host:"localhost",
        user:"Tomas",
        password:"1234",
        database:"motorsport",        
    }
)
 
const conectar = () => {
    conector.connect(err => {
        if(err) throw err
        console.log('conectado')
    })
}

const agregarVehiculo = (email, brand, model, kms, year,fuel,price,photo,description) => {
    const sql = `INSERT INTO stock (id, email, brand, model, kms, year, fuel, price, photo, description) VALUES (null, '${email}', '${brand}', '${model}', '${kms}', '${year}', '${fuel}', '${price}', '${photo}', '${description}')`;
conector.query(sql, function(err, result, filed){
        if(err) throw err
        console.log(result)
    })

}



const obtenerVehiculos =()=>{
    const sql = 'SELECT * FROM stock'
    conector.query(sql, function(err, result, filed){
        todos=result
    })
    return todos
}

export{conectar,obtenerVehiculos,agregarVehiculo}
