let vehiculos=[];

let total = 0;

function Pay(){
  window.alert(vehiculos.join(",\n"));
}

//---------

function displayVehiculos(vehiculostList) {
  let productsHTML = '';
  vehiculostList.forEach(element => {
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
  document.getElementById('page-content').innerHTML= productsHTML;


}



window.onload = async()=>{
  const vehiculostList = await (await fetch("/api/products")).json();
  
  console.log(vehiculostList);
  displayProducts(vehiculostList);
}