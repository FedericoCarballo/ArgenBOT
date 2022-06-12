const DESCUENTOPRIMERACOMPRA = 20

const producto1 = new Producto("Torta Brownie", 10, 2200, DESCUENTOPRIMERACOMPRA)
const producto2 = new Producto("Lemon Pie", 4, 2100, DESCUENTOPRIMERACOMPRA)
const producto3 = new Producto("CheeseCake", 2, 2470, DESCUENTOPRIMERACOMPRA)
const producto4 = new Producto("Hudson", 6, 2470, DESCUENTOPRIMERACOMPRA)
const producto5 = new Producto("Bauhaus", 2, 2200, DESCUENTOPRIMERACOMPRA)
const producto6 = new Producto("BauhausSM", 10, 2200, DESCUENTOPRIMERACOMPRA)





const producto = [
    {nombre: "Torta Brownie", precio: 2200},
    {nombre: "Lemon Pie", precio: 2100},
    {nombre: "CheeseCake", precio: 2470},
    {nombre: "Hudson", precio: 2470},
    {nombre: "Bauhaus", precio: 2200},
    {nombre: "BauhausSM", precio: 2200},
]

const productos = producto.filter((el) => {return el.nombre.includes("Bauhaus")})
//const productos2 = producto.filter((el) => el.nombre < 2200)
console.log(productos)


let tortaFavorita = prompt("Ingrese su torta favorita");
let torta = producto.find ((el) => {return el.nombre == tortaFavorita})
console.log(torta);