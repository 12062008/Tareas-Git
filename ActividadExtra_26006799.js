// Información del usuario
const nombre = "Tu Nombre"; // Reemplaza con tu nombre
const carnet = "123456"; // Reemplaza con tu número de carnet

function jugar() {
  let continuar = true;

  while (continuar) {
    // Generar número aleatorio entre 1 y 9
    const numeroComputadora = Math.floor(Math.random() * 9) + 1;

    // Pedir al usuario un número entre 3 y 6
    let numeroUsuario;
    do {
      numeroUsuario = parseInt(prompt("Ingrese un número entre 3 y 6:"));
      if (numeroUsuario < 3 || numeroUsuario > 6) {
        alert("Número inválido. Debe estar entre 3 y 6.");
      }
    } while (numeroUsuario < 3 || numeroUsuario > 6);

    // Pedir adivinanza al usuario
    let adivinanza;
    do {
      adivinanza = prompt(
        "¿Su número es mayor, menor o igual que el de la computadora? (mayor/menor/igual)"
      ).toLowerCase();
      if (adivinanza !== "mayor" && adivinanza !== "menor" && adivinanza !== "igual") {
        alert("Debe ingresar 'mayor', 'menor' o 'igual'.");
      }
    } while (adivinanza !== "mayor" && adivinanza !== "menor" && adivinanza !== "igual");

    // Determinar resultado real
    let resultadoReal;
    if (numeroUsuario > numeroComputadora) {
      resultadoReal = "mayor";
    } else if (numeroUsuario < numeroComputadora) {
      resultadoReal = "menor";
    } else {
      resultadoReal = "igual";
    }

    // Mostrar resultados
    if (adivinanza === resultadoReal) {
      alert(
        `La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección es ${adivinanza}. ¡Ha adivinado!`
      );
    } else {
      alert(
        `La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección es ${adivinanza}. No ha adivinado.`
      );
    }

    // Preguntar si quiere jugar otra vez
    let respuesta;
    do {
      respuesta = prompt("¿Desea jugar otra vez? (SI/NO)").toUpperCase();
      if (respuesta !== "SI" && respuesta !== "NO") {
        alert("Debe ingresar SI o NO.");
      }
    } while (respuesta !== "SI" && respuesta !== "NO");

    if (respuesta === "NO") {
      continuar = false;
      alert(`Gracias por jugar, ${nombre}. Número de carnet: ${carnet}`);
    }
  }
}

// Iniciar el juego
jugar();
