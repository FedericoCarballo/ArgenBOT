let usuario = "ganimedes2q@gmail.com";

cont = 0;
while (cont < 3) {
    let usuario = prompt("Introduzca su correo electronico");
    let contrasena = prompt("Introduzca su contraseña");

    if (usuario == 'ganimedes2q@gmail.com' && contrasena == "123456") {
        alert("Bienvenido a ArgenBot.");
        cont = 0;
        break;

    } else {

        if (usuario != 'ganimedes2q@gmail.com' && contrasena == '123456') {
            alert('Correo incorrecto');
        } else if (usuario == 'ganimedes2q@gmail.com' && contrasena != '123456') {
            alert('Contraseña incorrecta');
        } else {
            cont++;
            alert('Error. Los datos son incorrectos');
        }

        if (cont == 3) {
            alert('Lo siento, has agotado el número de intentos');
        }
    }
 }
