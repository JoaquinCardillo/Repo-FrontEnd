// Función para mostrar las motos
function displayBikes(bikeList) {
    let productsHTML = '';
    bikeList.forEach(element => {
      productsHTML += `
        <div class="item-container">
          <h3>${element.brand}</h3>
          <h4>${element.model}</h4>
          <img src="${element.photo}" alt="Vehicle Photo">
          <h4 id="car-price1" style="color:goldenrod">${element.price} u$d</h4>
          <p><i>${element.fuel}<br>${element.kms} kms</i><br>${element.year}</p>
          <button class="button-ask">Ask</button>
        </div>
      `;
    });
    document.getElementById('page-content-bikes').innerHTML = productsHTML;
  }
  
  // Carga los datos de las motos y muestra la lista
  window.onload = async () => {
    try {
      const response = await fetch("/api/motoProducto");
      const bikeList = await response.json();
      console.log(bikeList);
      displayBikes(bikeList);
    } catch (error) {
      console.error(error);
    }
  };
  