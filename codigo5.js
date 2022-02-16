"use strict";

let hora = document.getElementById("hora");
/*
setInterval(() => {
    let d = new Date();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();
    if (hh < 10) hh = "0" + hh;
    if (mm < 10) mm = "0" + mm;
    if (ss < 10) ss = "0" + ss;
    hora.innerHTML = `${hh}:${mm}:${ss}`;
}, 1000);;
*/

setInterval(() => {
    let d = new Date();
    hora.innerHTML = d.toLocaleTimeString();
}, 1000);


