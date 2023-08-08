let propiedades = [

  // Propiedades disponibles a la venta

  {
    nombre: "Departamento al pozo",
    Barrio:"Centro",
    ubicacion: "Vte Lopez al 1200",
    descripcion: "Cinco ambientes en 100mt2 cubiertos.",
    valor: 85000,
  },
  {
    nombre: "Chalet ubicado en el centro de la ciudad",
    Barrio: "centro",
    ubicacion: "Rivadavia 2390",
    descripcion: "120mt2 cubiertos.",
    valor: 120000,
  },
  {
    nombre: "Monoambiente totalmente amueblado",
    Barrio:"Mariano Moreno",
    ubicacion: "velez sarfield 3100",
    descripcion: "Zona Mariano moreno.",
    valor: 89000,
  },
  {
    nombre: "Casa amplia en importante punto de la ciudad",
    Barrio:"Villa floresta",
    ubicacion: "lamadrid 2020",
    descripcion: "40mt2.",
    valor: 70000,
  },
  {
    nombre: "Local centrico, excelente punto de la ciudad",
    Barrio:"Centro",
    ubicacion: "Rivadavia 2020",
    descripcion: "40mt2.",
    valor: 35000,
  },
];



// Función para mostrar información de una propiedad específica

function pedirDatos() {
  let numeroPropiedad = parseInt(prompt("Ingrese el número de la propiedad que desea consultar"));

  if (numeroPropiedad >= 1 && numeroPropiedad <= propiedades.length) {
    let propiedadSeleccionada = propiedades[numeroPropiedad - 1];

    let mensaje = "Información de la propiedad:\n\n";
    mensaje += `Nombre: ${propiedadSeleccionada.nombre}\n`;
    mensaje += `Ubicación: ${propiedadSeleccionada.ubicacion}\n`;
    mensaje += `Descripción: ${propiedadSeleccionada.descripcion}\n`;
    mensaje += `Valor: ${propiedadSeleccionada.valor} dólares\n`;

    alert(mensaje);
  } else {
    alert("Número de propiedad inválido. Por favor, ingrese un número válido del 1 al " + propiedades.length + ".");
  }
}


function Buscador() {
  let seguirBuscando = true;

  while (seguirBuscando) {
    let valorDeseado = parseInt(prompt("Ingrese el valor que busca para las propiedades"));

    let propiedadesCercanas = propiedades.filter((propiedad) => propiedad.valor <= valorDeseado);

    if (propiedadesCercanas.length > 0) {
      let mensaje = "Propiedades con valor igual o menor a " + valorDeseado + " dólares:\n\n";
      propiedadesCercanas.forEach((propiedad, index) => {
        mensaje += `${index + 1}: ${propiedad.nombre} - Valor: ${propiedad.valor} dólares\n`;
      });

      alert(mensaje);
    } else {
      alert("No se encontraron propiedades con valor igual o menor al valor deseado.");
    }

    // Preguntar al usuario si desea continuar buscando
    let respuesta = prompt("¿Desea seguir buscando propiedades? (responda 'si' o 'no')");
    if (respuesta.toLowerCase() !== 'si') {
      seguirBuscando = false; // Salir del bucle si el usuario responde 'no'
    }
  }
}

// Función para calcular el valor en pesos argentinos

function calcular() {
  let valorIngresado = prompt("Ingresa el valor de la propiedad en dolares");
  let factor = 595;
  let resultado = valorIngresado * factor;
  let mensaje = "El valor de la propiedad hoy es de: " + resultado + " Pesos Argentinos.";
  alert(mensaje);
}


