const contenedor = document.querySelector(".flex-container");
//De esta manera trabajamos la logica javascript en el boton"COMPRAR"
const boton = document.querySelector(".send-button");
let valorAntiguo = boton.value;
boton.value = valorAntiguo.toUpperCase();

function crearLLave(nombre,modelo,precio){
    img =`<img class ="llave-img" src ="imagenes/llave.png">`;
    nombre = `<h2>LLave: ${nombre}</h2>`;
    modelo = `<h3>Modelo: ${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`; 
    return [img,nombre,modelo,precio];
}
 
let documentFragment = document.createDocumentFragment();

for(i=1;i<=20;i++){
    let modeloRandom = Math.round(Math.random()*1000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLLave(i, modeloRandom, precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{
        document.querySelector(".key-data").value = modeloRandom
    });
    div.tabIndex = i;
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);


