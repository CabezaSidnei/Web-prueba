let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;
let url = window.location.href;
let protocol = window.location.protocol;
let host = window.location.hostname;
let patName = window.location.pathname;

let html = `La url es: ${url}<br>
El host es: ${host}<br>
El nombre de ruta es: ${patName}<br>
El protocolo es: ${protocol}`;

document.write(html);



 