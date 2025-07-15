function Carrito(){
    this.productos = [];
    this.total = 0;

    this.agregarProducto = function (nombre, precio){
    this.productos.push(nombre, precio);
    this.total = this.total + precio
    console.log(`Producto agregado: ${nombre} ($${precio})`);
    }    

    this.calcularDescuento = function (){
        if(this.total > 100){
            let descuento = (this.total * 0.10)
            let totalConDescuento = this.total - descuento;

            console.log(`Total: $${this.total}`);
            console.log("Descuento aplicado: 10%");
            console.log(`Total con descuento: $${totalConDescuento}`)

        }else if(this.total > 50 & this.total <= 100){

            let descuento = this.total * 0.05;
            let totalConDescuento = this.total - descuento;
            
            console.log(`Total: $${this.total}`);
            console.log("Descuento aplicado: 5%");
            console.log(`Total con descuento: $${totalConDescuento}`);
        }else{
            console.log(`Total: $${this.total}`);
            console.log("No aplica descuento.");
        }
    }
}

let miCarrito = new Carrito();

miCarrito.agregarProducto("Zapatos", 10);
miCarrito.agregarProducto("Camisa", 30);
miCarrito.agregarProducto("Pantalón", 50);

miCarrito.calcularDescuento();