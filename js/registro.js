
document.addEventListener("submit", (e) => {
    e.preventDefault();
    guardarDatos();
    Swal.fire({
        icon: 'success',
        title: 'Te has registrado con exito, ¡Bienvenido/a a Scarlett, Delicidas Finas!',
        showConfirmButton: false,
        timer: 1500
    })
})


function guardarDatos () {
    const datosGuardados = {nombre:inputName.value,
                            usuario:inputText.value,
                            email:inputEmail.value,
                            contraseña:inputPassword.value}
    let str = JSON.stringify(datosGuardados)
    sessionStorage.setItem("datosGuardados", str)
}




let halagoBienvenida = ["Gracias por elegirnos", "Esperamos tu compra :)", "No olvides ver nuestro catalogo", "Tenemos alta variedad de productos", "Deleita a tu familia con nuestros exquisitos sabores"];
const bienvenida = halagoBienvenida[Math.floor(Math.random() * halagoBienvenida.length)];
alert("Bienvenido/a " + bienvenida);

