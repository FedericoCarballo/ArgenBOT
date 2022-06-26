const DESCUENTOPRIMERACOMPRA = 20;

function Producto(nombre, stock, precio, descuento) {
    this.nombre = nombre
    this.stock = stock
    this.precio = precio
    this.descuento = descuento

    this.precioFinal = function () {
        return this.precio * this.descuento
    }

    this.descuentoStock = function(unidades) {
        this.stock = this.stock - unidades
    }
}
