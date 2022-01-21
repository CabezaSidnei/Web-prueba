
class Persona {
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

const data = [
    ["Sidnei","CabezaSidnei"],
    ["Diana","@Guarnieri"],
    ["Lorena","@Scarone"],
    ["Maria"]
];

const personas =[];
for(let i=0;i<data.length;i++){
    personas[i] = new Persona(data[i][0],data[i][1]);
}

/*Primer forma de hacerlo con CALLBACK (es la mas complicada) */
/*
const obtenerPersona = (id,cb)=>{
    if(personas[id] == undefined) cb("No se ha encontrado la persona");
    else cb(null,personas[id],id);
}

const obtenerInstagram = (id,cb)=>{
    if(personas[id].instagram == undefined) cb("No tiene instagram");
    else cb(null,personas[id].instagram);
}

obtenerPersona(1,(err,persona,id)=>{
    if (err) console.log(err);
    else {
        console.log(persona.nombre);
        obtenerInstagram(id,(err,instagram)=>{
            if (err) console.log(err);
            else console.log(instagram);
        });
    }
})
*/



/*Ejemplo facil de PROMESA*/
/*
let nombre = "Alejandra";

const promesa = new Promise((resolve,reject)=>{
    if (nombre !== "Alejandra") reject("Nombre no es Alejandra");
    else resolve(nombre);
});

promesa.then((resultado)=>{
    console.log(resultado);
}).catch((e)=>{
    console.log(e);
})
*/


/*Segunda forma de hacerlo con PROMESA (la mas facil) */

const obtenerPersona = (id)=>{
    return new Promise((resolve,reject)=>{
        if (personas[id] == undefined) reject("No hay persona");
        else resolve(personas[id]); 
    })
}

const obtenerInstagram = (id)=>{
    return new Promise((resolve,reject)=>{
        if(personas[id].instagram == undefined) reject("No tiene instagram");
        else resolve(personas[id].instagram);    
    })
}

let id = 1;
obtenerPersona(id).then((persona)=>{
    console.log(persona.nombre);
    return obtenerInstagram(id);
}).then((instagram)=>{
    console.log(instagram);
}).catch((e)=>{
    console.log(e);
})


