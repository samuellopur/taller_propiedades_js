function Libro(titulo, autor){
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;

    this.prestar = function(){
        if (!this.prestado){
            this.prestado = true
            console.log("El libro está disponible");
        }else{
            console.log("Libro no disponible, en préstamo")
        }
    }
}

let libro1 = new Libro("Crear o morir", "Andrés Oppenheimer")

libro1.prestar();
libro1.prestar();

