import mysql from "mysql"
let todos

const conector = mysql.createConnection(
    {
        host:"localhost",
        user:"Tomas",
        password:"1234",
        database:"agenda_contanctos",        
    }
)
 
const conectar = () => {
    conector.connect(err => {
        if(err) throw err
        console.log('conectado')
    })
}

const agregarContacto = (numero, nombre) => {
    const sql = `INSERT INTO persona (id_persona, numero, nombre) VALUES (null, '${numero}', '${nombre}')`;
    conector.query(sql, function(err, result, filed){
        if(err) throw err
        console.log(result)
    })

}


const obtenerContactos =()=>{
    const sql = 'SELECT * FROM persona'
    conector.query(sql, function(err, result, filed){
        todos=result
    })
    return todos
}

export{conectar,agregarContacto,obtenerContactos}
