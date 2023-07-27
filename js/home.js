let propiedad = [
  {
    nombre: "Departamento al pozo",
    ubicacion: "Vte Lopez al 1200",
    descripcion: "Cinco ambientes en 100mt2 cubiertos.",
    valor: 85000,
  },
  {
    nombre: "Chalet ubicado en el centro de la ciudad",
    ubicacion: "Centro",
    descripcion: "120mt2 cubiertos.",
    valor: 120000,
  },
  {
    nombre: "Monoambiente totalmente amueblado",
    ubicacion: "Mariano Moreno",
    descripcion: "Zona Mariano moreno.",
    valor: 89000,
  },
  {
    nombre: "Casa Ubicada en barrio villa floresta",
    ubicacion: "Villa Floresta",
    descripcion: "40mt2.",
    valor: 70000,
  },
  {
    nombre: "Local centrico, excelente punto de la ciudad",
    ubicacion: "Centro",
    descripcion: "40mt2.",
    valor: 35000,
  },
];

function pedirDatos() {
  let numeroPropiedad = parseInt(prompt("Ingrese el número de la propiedad que desea consultar"));

  // Verificar si el número de propiedad ingresado es válido

  if (numeroPropiedad >= 1 && numeroPropiedad <= propiedad.length) {
    let propiedadSeleccionada = propiedad[numeroPropiedad - 1];

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
 
// Buscar entre valores deseados

function Buscador() {
  let valorDeseado = parseInt(prompt("Ingrese el valor que busca para las propiedades"));

  let propiedadesCercanas = propiedad.filter((propiedad) => propiedad.valor <= valorDeseado);

  if (propiedadesCercanas.length > 0) {
    let mensaje = "Propiedades con valor igual o menor a " + valorDeseado + " dólares:\n\n";
    propiedadesCercanas.forEach((propiedad, index) => {
      mensaje += `${index + 1}: ${propiedad.nombre} - Valor: ${propiedad.valor} dólares\n`;
    });

    alert(mensaje);
  } else {
    alert("No se encontraron propiedades con valor igual o menor al valor deseado.");
  }
}







//Home - propiedades - INFORMACIÓN Y VALOR ACTUALIZADO

// Propiedades disponibles a la venta

let propiedades = {
  1: "Departamento al pozo, ubicado en Vte Lopez al 1200. Cinco ambientes en 100mt2 cubiertos. Valor: 85000 dólares",
  2: "Chalet ubicado en el centro de la ciudad 120mt2 cubiertos. Valor $120000 dólares",
  3: "Monoambiente totalmente amueblado, zona Mariano moreno. Valor $89000",
  4: "Casa Ubicada en barrio villa floresta. 40mt2. Valor $70000 dólares",
  5: "Local centrico, excelente punto de la ciudad. 40mt2. Valor $35000 dólares",
};

function pedirDatos() {
  let propiedad = prompt("Ingrese el número de la propiedad que desea consultar");

  // Verificar si el número de propiedad ingresado existe en el objeto
  if (propiedad in propiedades) {
    alert(propiedades[propiedad]);
  } else {
    alert("Propiedad no encontrada. Por favor, ingrese un número válido.");
  }
}



function calcular() {
  // Solicitar el valor al usuario en pesos Argentinos
  let valorIngresado = prompt("Ingresa el valor de la propiedad en pesos Argentinos");

  // Convertir el valor a dólares (con el factor de conversión, que puede variar)
  let factor = 550;
  let resultado = valorIngresado * factor;

  let mensaje = "El valor de la propiedad hoy es de: " + resultado + " Pesos Argentinos.";
  alert(mensaje);
}



