// Función para mostrar los autos
function displayCars(carList) {
  let productsHTML = '';
  carList.forEach(element => {
    productsHTML += `
      <div class="item-container">
        <h3>${element.brand}</h3>
        <h4>${element.model}</h4>
        <img src="${element.photo}" alt="Vehicle Photo">
        <h4 id="car-price1" style="color:goldenrod">${element.price} u$d</h4>
        <p><i>${element.fuel}<br>${element.kms} kms<br>${element.year}</i></p>
        <button class="button-ask">Ask</button>
      </div>
    `;
  });
  document.getElementById('page-content-cars').innerHTML = productsHTML;
}

// Carga los datos de los autos y muestra la lista
window.onload = async () => {
  try {
    const response = await fetch("/api/autoProducto");
    const carList = await response.json();
    console.log(carList);
    displayCars(carList);
  } catch (error) {
    console.error(error);
  }
};
