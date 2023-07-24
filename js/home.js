
// Contenido del archivo "home.js"
//Home propiedades INFORMACIÓN Y VALOR ACTUALIZADO

function pedirDatos() {

    // Propiedades disponibles a la venta
    let propiedad1 = {
      1: "Departamento al pozo, ubicado en Vte Lopez al 1200. Cinco ambientes en 100mt2 cubiertos.Valor: 85000 dólares",
      2: "Chalet ubicado en el centro de la ciudad 120mt2 cubieros, Valor $120000 dolares",
      3: "Monoambiente totalmente amueblado, zona Mariano moreno. Valor $89000",
      4: "Casa Ubicada en barrio villa floresta. 40mt2 Valor $70000 dolares",
      5: "Local centrico, excelente punto de la ciudad. 40mt2. Valor $35000 dolares",
    
    };
  
    let propiedad = prompt("Ingrese el número de la propiedad que desea consultar");
  
    // Verificar si el número de propiedad ingresado existe en el objeto

    if (propiedad in propiedad1) {
      alert(propiedad1[propiedad]);
    } else {
      alert("Propiedad no encontrada. Por favor, ingrese un número válido.");
    }
  }
  function calcular() {
    // Solicitar el valor al usuario
    let valorIngresado = prompt("Ingresa el valor de la propiedad en pesos Argentinos");
//Dolarhoy
    let factor = 528;

    let resultado = valorIngresado * factor;
    
    let mensaje = "El valor de la propiedad hoy es de: " + resultado + " Pesos Argentinos.";
    alert(mensaje);
  }