let prducts=[];
let total= 0;

function add(product,price){
    console.log(product,price);
    products.push(product);
    total=total+price;
    document.getElementById("checkout").innerHTML=`Pagar $${total}`

}

function Pay(){
  window.alert(prducts.join(",\n"));
}

window.onload =async()=>{
  console.log("fetch")
}