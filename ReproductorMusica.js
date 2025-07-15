function Reproductor(){
    this.estado = "detenido";
    //this.estado = "reproduciendo"
    //this.estado = "pausado"

    this.play = function(){
        if(this.estado == "detenido" || this.estado == "pausado"){
            this.estado = "reproduciendo";
            console.log("Reproduciento música");
        }else{
            console.log("Ya se está reproduciendo música")
        }
    }

    this.pausar = function(){
        if(this.estado == "reproduciendo"){
            this.estado = "pausado"
            console.log("Música pausada");
        }else{
            console.log("No hay música reproduciéndose")
        }
    }

    this.detener = function(){
        this.estado = "detenido"
        console.log("Música detenida")
    }
}

let reproductor1 = new Reproductor();

reproductor1.play();
reproductor1.pausar();
reproductor1.play();
reproductor1.detener();


