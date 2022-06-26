const inputEmail = document.getElementById("email-registro");
const inputPassword = document.getElementById("password-registro");
const inputName = document.getElementById("nombre-registro");
const inputText = document.getElementById("usuario-registro");
const inputSubmit = document.getElementById("boton-submit");

const DESCUENTOPRIMERACOMPRA = 20;

const producto1 = new Producto("Torta Brownie", 10, 2200, DESCUENTOPRIMERACOMPRA);
const producto2 = new Producto("Lemon Pie", 4, 2100, DESCUENTOPRIMERACOMPRA);
const producto3 = new Producto("CheeseCake", 2, 2470, DESCUENTOPRIMERACOMPRA);
const producto4 = new Producto("Hudson", 6, 2470, DESCUENTOPRIMERACOMPRA);
const producto5 = new Producto("Bauhaus", 2, 2200, DESCUENTOPRIMERACOMPRA);
const producto6 = new Producto("BauhausSM", 10, 2200, DESCUENTOPRIMERACOMPRA);

const inputEmailLogin = document.querySelector("#email-login")
const inputPasswordLogin = document.querySelector("#password-login")
