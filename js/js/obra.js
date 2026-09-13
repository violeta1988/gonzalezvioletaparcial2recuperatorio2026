// GALERÍA DE OBRAS

// arreglo de objetos con las obras
let arrayObras = [
    {
        titulo: "Arquitectura del lenguaje",
        anio: 2017,
        imagen: "img/anderson-2.jpg"
    },
    {
        titulo: "Arquitectura del lenguaje",
        anio: 2017,
        imagen: "img/arquitecturadellenguaje3.jfif"
    },
    {
        titulo: "Instrumentos inventados",
        anio: 1977,
        imagen: "img/instrumentos1.webp"
    },
    {
        titulo: "Violin Tape-bow",
        anio: 1977,
        imagen: "img/violin.jpg"
    },
     {
        titulo: "arquitectura del lenguaje",
        anio: 2017,
        imagen: "img/arquitecturadellenguaje1.jfif"
    }
];

// captura de elementos del DOM por su identificador
let divGaleria = document.getElementById("galeria");
let botonVerGaleria = document.getElementById("verGaleria");

// escuchador de eventos al hacer clic 
botonVerGaleria.addEventListener("click", function(e) {

    
    // cambiar el texto y estilos visuales del botpn
    botonVerGaleria.innerText = "Click de nuevo para otra imagen!";
    botonVerGaleria.style.backgroundColor = "rgba(140, 130, 120, 0.5)";
    botonVerGaleria.style.color = "whitesmoke";
    
    // se hace visible el contenedor de la galeria
    divGaleria.style.display = "block";
    
    
    // Seleccionamos una obra al azar del arreglo
    let obraElegida = Math.floor(Math.random() * arrayObras.length);
    let obra = arrayObras[obraElegida];
    
    // HTML con el título y la imagen
    divGaleria.innerHTML = 
        "<h4>" + obra.titulo + " - " + obra.anio + "</h4>" +
        "<img src='" + obra.imagen + "' alt='" + obra.titulo + "'>";
});