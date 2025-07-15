function ListaCompras(){
    this.productos =[];

    this.agregar = function(producto) {
        this.productos.push(producto);
  }

    this.agregar("Pan tajado");
    this.agregar("Jamon");
    this.agregar("Queso");

    this.mostrar = function(){
        for(let i = 0; i < this.productos.length; i++){
            console.log((i + 1) + ". " + this.productos[i]);
        }
    }
}

let listaCompras = new ListaCompras();
/*listaCompras.agregar("Pan tajado");
listaCompras.agregar("Jamon");
listaCompras.agregar("Queso")
*/
listaCompras.mostrar();


