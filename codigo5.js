const input = document.querySelector(".input-prueba");
const cont = document.querySelector(".selecionado");

input.addEventListener("select",(e)=>{
    
    let star = e.target.selectionStar;
    let end = e.target.selectionEnd;
    let textContent = input.value;
    cont.innerHTML = textContent.substring(star,end);
    
    
});