const email= document.querySelector("#email")
const brand= document.querySelector("#brand")
const model= document.querySelector("#model")
const year= document.querySelector("#year")
const kms= document.querySelector("#kms")
const fuel= document.querySelector("#fuel")
const price= document.querySelector("#price")
const photo= document.querySelector("#photo")

const description= document.querySelector("#description")

const btnAgregar= document.querySelector("#btnAgregar")

btnAgregar.addEventListener('click',function(){
    window.location.href = `agregar/${email.value}/${brand.value}/${model.value}/${kms.value}/${year.value}/${fuel.value}/${price.value}/${photo.value}/${description.value}`;
    window.location.reload();
})

{/* <script>
    var vehiculos = [
        { brand: "Marca1", model: "Modelo1" },
        { brand: "Marca2", model: "Modelo2" },
        { brand: "Marca3", model: "Modelo3" }
    ];

    vehiculos.forEach(function (vehiculo) {
        var p = document.createElement("p");
        p.textContent = vehiculo.brand + " -- " + vehiculo.model;
        document.body.appendChild(p);
    });
</script>

<script src="funciones.js"></script> */}