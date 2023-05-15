let products=[];
let autoProducto=[];

///MOSTRAR AUTOS

function displayCars(carList) {
  let productsHTML = '';
  carList.forEach(element => {
    productsHTML +=
    `<div class="item-container">
                <h3>${element.brand}</h3>
                <img src="${element.photo}"alt="Vehicle Photo">
                <h4 id="car-price1" style="color:goldenrod">${element.price} u$d</h4>
                <h4>${element.model}</h4>
                <p><i>${element.fuel}<br>${element.kms} kms</i></p>
                <button class="button-ask">Ask</button>
              </div>`
    
  });
  document.getElementById('page-content-cars').innerHTML= productsHTML;

}

window.onload = async()=>{
  const carList = await (await fetch("/api/autoProducto")).json();
  
  console.log(carList);
  displayCars(carList);
}


///MOSTRAR MOTOS


function displayBikes(bikeList) {
  let productsHTML = '';
  bikeList.forEach(element => {
    productsHTML +=
    `<div class="item-container">
                <h3>${element.brand}</h3>
                <img src="${element.photo}"alt="Vehicle Photo">
                <h4 id="car-price1" style="color:goldenrod">${element.price} u$d</h4>
                <h4>${element.model}</h4>
                <p><i>${element.fuel}<br>${element.kms} kms</i></p>
                <button class="button-ask">Ask</button>
              </div>`
    
  });
  document.getElementById('page-content-bikes').innerHTML= productsHTML;


}



window.onload = async()=>{
  const bikeList = await (await fetch("/api/products")).json();
  
  console.log(bikeList);
  displayBikes(bikeList);
}