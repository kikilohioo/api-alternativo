let ARTICULOS_URL = "https://kikilohioo.github.io/api-alternativo/api-alternativo/jsons/articulos.json";

document.addEventListener("DOMContentLoaded", function (e) {
    let prodgrid = document.getElementById("prodgrid");
    prodgrid.innerHTML = "";
    fetch(ARTICULOS_URL)
        .then(respuesta => respuesta.json())

        .then(datos => {
            for(let producto of datos){
                prodgrid.innerHTML += 
                `<div class="prod">
                    <img src="`+ producto.imgSrc +`" alt="`+ producto.nombre +`">
                    <p>`+ producto.nombre +`</p>
                </div>`;
            }
        }).catch(error => alert(error))
});