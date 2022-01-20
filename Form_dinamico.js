let alumnos = [{
    nombre: "Sidnei Sanchez",
    email: "scdfdf@gmail.com",
    materia: "Programación"
},{
    nombre: "Diana Guarnieri",
    email: "scdfdf@gmail.com",
    materia: "Fisica"
},{
    nombre: "Veronica Giampietro",
    email: "scdfdf@gmail.com",
    materia: "Diseño"
},{
    nombre: "Alejandra Silvera",
    email: "scdfdf@gmail.com",
    materia: "Costura"
},{
    nombre: "Lorena Scarone",
    email: "scdfdf@gmail.com",
    materia: "Ventas"
}];

const boton = document.querySelector(".btn-confirmar");
const contenedor = document.querySelector(".grid-container")

for (alumno in alumnos){
   let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
        </div>`;
    contenedor.innerHTML += htmlCode;    
}

boton.addEventListener("click",()=>{
    let confirmar = confirm("Quiere confirmar?");
    if(confirmar){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for (elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
});


