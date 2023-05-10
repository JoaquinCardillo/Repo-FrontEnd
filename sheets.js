/*
let= vehiculos
*/

async function getVehiculos(){
    let response;
    try {
        response = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '1HcvQj9dEcavmjp92LtbhVeXTwOZyQlTXhRvkEMhfO_Q',
            range: 'stock!A:K',
        });
    } catch (err) {
        console.error(err)
        return;
    }
    const range = response.result;
    if (!range || !range.values || range.values.length == 0) {
        console.warn("No se encontraron valores")
        return;
    }
}

vehiculos=[];
range.values.forEach((fila => {
    if(isNaN(parseInt(fila[0]))|| fila[5] !== undefined)return;
    const nuevoVehiculo={
        id:fila[0],
        brand:fila[1],
        model:fila[2],
        kms:fila[3],
        fuel:fila[4],
        email:fila[5],
        descrip:fila[6],
        photo:fila[7],

    }
    turnos.push(nuevoVehiculo);    
}));
    console.log(vehiculos)