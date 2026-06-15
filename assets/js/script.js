const formulario = document.getElementById("formulario-contacto");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    if (nombre.value === "") {
        alert("Debes introducir tu nombre");
        return;
    }

    if (email.value === "") {
        alert("Debes introducir tu email");
        return;
    }

    if (mensaje.value === "") {
        alert("Debes escribir un mensaje");
        return;
    }

    alert("Formulario enviado correctamente");

});