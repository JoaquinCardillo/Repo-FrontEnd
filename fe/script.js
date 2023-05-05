let products=[];

let total = 0;

function add(product,price){
  console.log(product,price);
  products.push(product);
  total=total+price
  document.getElementById("checkout").innerHTML= `pagar $$(total)}`

}

function Pay(){
  window.alert(products.join(",\n"));
}

//---------

function displayProducts(productList) {
  let productsHTML = '';
  productList.forEach(element => {
    productsHTML +=
    `<div class="item-container">
                <h3 id="car1">${element.brand}</h3>
                <img src="${element.photo}"alt="acá iría la foto de un carro to cheto">
                <h4 id="car-price1" style="color:goldenrod">${element.price}</h4>
                <h4>Features</h4>
                <p id="car-item1"><i>empty</i></p>
                <button class="button-ask">Ask</button>
              </div>`
    
  });
  document.getElementById('page-content').innerHTML= productsHTML;


}



window.onload = async()=>{
  const productList = await (await fetch("/api/products")).json();
  
  console.log(productList);
  displayProducts(productList);
}