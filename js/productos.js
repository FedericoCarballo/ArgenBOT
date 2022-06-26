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