 class Celular {
     constructor(color,peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
     }
     botonEncendido(){
        if (!this.encendido) {
            alert("Encender");
            this.encendido = true;
        }else{
            alert("Apagar");
            this.encendido = false;
        }
     }

     reiniciar(){
        if (this.encendido) {
            alert("Reiniciando...");
        }else{
            alert("El celular esta apagado, enciendalo primero.");
        }
     }

     tomarFoto(){
        alert(`Foto tomada con camara de ${this.rdc}`);
     }

     grabarVideo(){
        alert(`Video grabado con video de: ${this.rdc}`)
     }

     mostrarInfo(){
         return `
         Color: <b>${this.color}</b><br>
         Peso: <b>${this.peso}</b><br>
         Resolucion pantalla: <b>${this.rdp}</b><br>
         Resolucion camara: <b>${this.rdc}</b><br>
         Memoria RAM: <b>${this.ram}</b><br><br>
         `;
     }
}

class CelularAltaGama extends Celular{
    constructor(color,peso,rdp,rdc,ram,camaraLenta,reconFacial,extraCamara){
        super(color,peso,rdp,rdc,ram);
        this.camaraLenta = camaraLenta;
        this.reconFacial = reconFacial;
        this.extraCamara = extraCamara;
    }
    mostrarInfoAltaGama(){
        return this.mostrarInfo() + `
            Camara Lenta: <b>${this.camaraLenta}</b><br>
            Reconocimiento facial: <b>${this.reconFacial}</b><br>
            Extra camara: <b>${this.extraCamara}</b><br><br>
            `;
    }
}
 
const cel = new Celular("azul","35gr","3500px","16mpx","1,2gb");
const cel2 = new Celular("negro","50gr","400px","12mpx","1.8gb");
const cel3 = new Celular("blanco","300gr","800px","18mpx","2gb");
const cel4 = new CelularAltaGama("Rojo","50gr","600px","20mpx","5GB","SI","SI","15mpx");

document.write(`
${cel.mostrarInfo()}
${cel2.mostrarInfo()}
${cel3.mostrarInfo()}
${cel4.mostrarInfoAltaGama()}`);



