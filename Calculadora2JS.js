"use strict";

/*Escuchamos cuando se carga el documento */
addEventListener("load", ()=> {
    /*Cramos dos constantes y no guardamos los elementos que necesitamos  */
    const pantalla = document.querySelector(".pantalla");
    const botones = document.getElementsByClassName("button");

    /*Creamos otra constante para convertir el HTMLcolection a Array */
    const botonesArray = Array.from(botones);
    
    /*Iteramos por nuestro nuevo array de botones */
    botonesArray.forEach( (btn) => {
        /*A cada boton le agregamos un listener */
        btn.addEventListener("click", () => {
            calculo(btn,pantalla);
        })
    })

});


function calculo(btn,pantalla) {
    switch(btn.value){
        case "C":
            borrar(pantalla);
            break;
        case "=":
            calcular(pantalla);
            break;
        case "<":
            retroceso(pantalla);
            break;
        default:
            actualizar(pantalla, btn);
            break;
    }
}


/*Tomar el string, resolverlo y guardarlo en el innerHTML del display*/

function calcular (pantalla) {
    pantalla.value = eval(pantalla.value);
}

function actualizar (pantalla, btn) {
    if (pantalla.value == 0) pantalla.value = "";
    pantalla.value += btn.value; 
}

function borrar (pantalla) {
    pantalla.value = "";
}

function retroceso (pantalla) {
    pantalla.value = pantalla.value.slice(0, -1); 
}

/*Codigo para arrastrar y soltar (Anda pero con fallos)*/
let dragValue;

function mover(id) {
    let calculadora = document.getElementById("calculadora");
    calculadora.style.position = "absolute";
    calculadora.onmousedown = function(){
        dragValue = calculadora;
    }
}

document.onmousemove = function(e){
    let x = e.pageX;
    let y = e.pageY;
    dragValue.style.left = x + "px";
    dragValue.style.top = y + "px";
}

document.onmouseup = function(e) {
    dragValue = null;
}