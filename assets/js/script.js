const botonModoOscuro = document.getElementById("modo-oscuro");

if (localStorage.getItem("modoOscuro") === "activado") {
    document.documentElement.classList.add("oscuro");
}

if (botonModoOscuro) {
    botonModoOscuro.addEventListener("click", function() {

        document.documentElement.classList.toggle("oscuro");

        if (document.documentElement.classList.contains("oscuro")) {
            localStorage.setItem("modoOscuro", "activado");
        } else {
            localStorage.setItem("modoOscuro", "desactivado");
        }

    });
}

const formulario = document.getElementById("formulario-contacto");

if (formulario) {

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");

    const errorNombre = document.getElementById("error-nombre");
    const errorEmail = document.getElementById("error-email");
    const errorMensaje = document.getElementById("error-mensaje");

    const contador = document.getElementById("contador");
    const mensajeExito = document.getElementById("mensaje-exito");

    nombre.addEventListener("input", function() {
        errorNombre.textContent = "";
        mensajeExito.textContent = "";
    });

    email.addEventListener("input", function() {
        errorEmail.textContent = "";
        mensajeExito.textContent = "";
    });

    mensaje.addEventListener("input", function() {
        errorMensaje.textContent = "";
        mensajeExito.textContent = "";
        contador.textContent = mensaje.value.length + " / 500 caracteres";
    });

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        errorNombre.textContent = "";
        errorEmail.textContent = "";
        errorMensaje.textContent = "";
        mensajeExito.textContent = "";

        if (nombre.value === "") {
            errorNombre.textContent = "Debes introducir tu nombre";
        }

        if (email.value === "") {
            errorEmail.textContent = "Debes introducir tu email";
        }

        if (mensaje.value === "") {
            errorMensaje.textContent = "Debes escribir un mensaje";
        }

        if (
            nombre.value !== "" &&
            email.value !== "" &&
            mensaje.value !== ""
        ) {
            mensajeExito.textContent = "Formulario enviado correctamente";

            nombre.value = "";
            email.value = "";
            mensaje.value = "";

            contador.textContent = "0 / 500 caracteres";
        }
    });

}