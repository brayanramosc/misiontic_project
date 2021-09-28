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

module.exports.validar_nombreUsuario = validar_nombreUsuario;
module.exports.validar_contrasena = validar_contrasena;