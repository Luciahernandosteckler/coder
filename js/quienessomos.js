

// COLORES CON TARGET

let formulario = document.getElementById("formulario");


formulario.addEventListener("submit", (e) => {

e.preventDefault();

let inputs = e.target.children;

if (!inputs[1].value.includes("@")) {

    inputs[1].value = "";

    alert("Debe ser un correo")

}

});
