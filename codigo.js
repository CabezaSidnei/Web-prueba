class Animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    }

    verInfo(){
    }

    ladrar(){        
    }

    get getEspecie(){
        return this.especie;
    } 

    set setEspecie(especie){
        this.especie = especie;
    }
}

class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
        this.info = `Soy ${this.especie}, tengo ${this.edad}, color: ${this.color}, raza: ${this.raza}`;
    }        
    static ladrar(){
        document.write("guau" + "<br>");
    }

    verInfo(){
        document.write(this.info + "<br>");
    }

}

class Gato extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = raza;
        this.info = `Soy ${this.especie}, tengo ${this.edad}, color: ${this.color}`;
    }        
    ladrar(){
       document.write("miau" + "<br>");
    }
    verInfo(){
        document.write(this.info + "<br>");
    }
}

const  perro = new Perro("perro","9","negro","Rotweiller");
const gato = new Gato("gato","5","blanco","tigre");
const pajaro = new Animal("pajaro","1","azul");

document.write(perro.getEspecie);


