const email = document.getElementById("email-registro");
const password = document.getElementById("password-registro");
const name = document.getElementById("nombre-registro");
const text = document.getElementById("usuario-registro");

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log("Formulario Enviado");
    alert("Bienvenido a Scarlett - Delicias Finas")
}

let halagoBienvenida = ["Gracias por elegirnos", "Esperamos tu compra :)", "No olvides ver nuestro catalogo", "Tenemos alta variedad de productos", "Deleita a tu familia con nuestros exquisitos sabores"];
const bienvenida = halagoBienvenida[Math.floor(Math.random() * halagoBienvenida.length)];
alert("Bienvenido/a " + bienvenida);

