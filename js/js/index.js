// DATOS CURIOSOS

// declaración del arreglo 
let datos = [
  "Laurie Anderson fue una de las primeras artistas en combinar performance, música experimental y tecnología en la escena del arte contemporáneo.",
  "Su tema O Superman se convirtió en un éxito inesperado en 1981 y llegó al segundo puesto en los rankings del Reino Unido.",
  "Diseñó su propio violín eléctrico que le permitía tocar sonidos digitales y activar efectos con sensores",
  "Ha colaborado con artistas como Lou Reed, con quien estuvo casada hasta su fallecimiento en 2013.",
  "En 2002 fue nombrada la primera artista residente de la NASA, desarrollando obras inspiradas en la exploración espacial.",
  "Ha creado instalaciones multimedia que combinan texto, imagen y sonido en entornos sensoriales de gran escala.",
  "Utiliza su propia voz alterada digitalmente como herramienta narrativa y estética en muchas de sus obras.",
];

// captura de elementos del DOM por su identificador
let btnDato = document.getElementById("btn-dato");
let textoDato = document.getElementById("texto-dato");

// escuchador de eventos con funcion tradicional
btnDato.addEventListener("click", function() {
  // generar un numero entero al azar entre 0 y el total de elementos del array
  let posicionAleatoria = Math.floor(Math.random() * datos.length);

  // muestra el texto aleatorio
  textoDato.innerText = datos[posicionAleatoria];
});