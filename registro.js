//import {validar_nombreUsuario, validar_contrasena} from "./validaciones.js";

function validar_nombreUsuario(string) {
    const ptr = new RegExp('^[A-Z0-9Ñ]+$', 'i');
    if (string.length < 3 || string.length > 9) {
        return false;
    } else if (!ptr.test(string)) {
        return false;
    } else {
        return true;
    }
}

function validar_contrasena(string) {
    const ptr = new RegExp('^[A-Z0-9Ñ]+$', 'i');
    if (string.length < 6) {
        return false;
    } else if (!ptr.test(string)) {
        return false;
    } else {
        return true;
    }
}

// Variable created to save the credentials
let registros = [];
const form = document.getElementById("form_registro_usuario");

form.addEventListener("submit", event =>{
    event.preventDefault()      // This command prevent the web page reload when the submit button is pressed
    agregarRegistro()
})


// Function that validates the information on the form and save it in an object array
function agregarRegistro(){
    const user = document.getElementById('in_usuario').value;
    const password = document.getElementById('in_contrasena').value;
    //const valPassword = document.getElementById('val_contrasena').value;
    //const email = document.getElementById('in_email').value;

    if(validar_nombreUsuario(user) && validar_contrasena(password)){
        registros.push({"usuario": user, "contrasena": password});
        console.log(registros);

        const n = filtrarPorContrasena(registros, 7);
    }else{
        alert("Usuario y/o contraseña no cumplen con los requisitos.")
    }
}


// Function to filter by password length
function filtrarPorContrasena(arreglo, filtro){
    const newArray = arreglo.filter(element => element.contrasena.length > filtro);
    console.log(newArray);
    return newArray;
}

/*module.exports = {
    agregarRegistro, filtrarPorContrasena
}*/

module.exports.validar_nombreUsuario = validar_nombreUsuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.filtrarPorContrasena = filtrarPorContrasena;