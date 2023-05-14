import {obtenerVehiculos} from "src/mysql_conector.js";

const cars = obtenerVehiculos()


function displayVehiculos(cars) {
  let productsHTML = '';
  cars.forEach(element => {
    productsHTML +=
    `<div class="item-container">
        <h3>${element.brand}</h3>
        <h4>${element.model}</h4>
        <img src="${element.photo}"alt="Vehicle Photo">
        <h4 id="car-price1" style="color:goldenrod">${element.price} USD</h4>
        <ul>
          <li><i>${element.fuel}</i></li>
          <li><i>${element.kms} km</i></li>
        </ul>
        <button class="button-ask">Ask</button>
    </div>`
  })
    console.log('displayVehiculos funciona')};

  document.getElementById('carsAll').innerHTML= productsHTML;
























// let vehiculos=[];

// let total = 0;

// function Pay(){
//   window.alert(vehiculos.join(",\n"));
// }

// //---------




// }



// window.onload = async()=>{
//   const vehiculostList = await (await fetch("/api/products")).json();
  
//   console.log(vehiculostList);
//   displayProducts(vehiculostList);
// }