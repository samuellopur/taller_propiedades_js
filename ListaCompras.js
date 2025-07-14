function ListaCompras(){
    this.productos =[]
    productos.push("Queso")
    this.productos.push("Jamon")
    this.productos.push("Pan tajado")

    this.prestar = function(){
        for(let i = 0; i < this.productos.length; i++){
            console.log(this.productos[i])

        }
    }
    
}