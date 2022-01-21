const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("solicitar");
const prevRes = document.querySelector(".prevRes");

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampos();
    if (error[0]) {
        prevRes.innerHTML = error[1];
        prevRes.classList.add("red");
    } else {
        prevRes.innerHTML = "Solicitud enviada correctamente";
        prevRes.classList.add("green");
        prevRes.classList.remove("red");
    }
});

function validarCampos(){
    let error = [];
    if (nombre.value.length < 5 || nombre.value.length > 40) {
        error[0] = true;
        error[1] = "El nombre es invalido";
        return error;
    } else if (email.value.length < 5 || email.value.length > 40 || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        error[0] = true;
        error[1] = "El email es invalido.";
        return error;
    } else if(materia.value.length < 4 || materia.value.length > 40) {
        error[0] = true;
        error [1] = "La materia es invalida";
        return error;
    }
    error[0] = false;
    return error;    
}