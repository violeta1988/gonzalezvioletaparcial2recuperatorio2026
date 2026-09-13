
// 1. VARIABLES GLOBALES

let obras = [];
let totalObrasAIngresar = 0;
let tiempoTransfPorMB = 0;
let costoMensualPorMB = 0;
let contadorObras = 0;


// 2. CAPTURA DE ELEMENTOS DEL DOM

let btnConfigurar = document.getElementById("btn-configurar");
let btnGuardar = document.getElementById("btn-guardar");
let btnCalcular = document.getElementById("btn-calcular");
let btnReiniciar = document.getElementById("btn-reiniciar");

let inputCantObras = document.getElementById("cant-obras");
let inputTiempoTransf = document.getElementById("tiempo-transf");
let inputCostoMb = document.getElementById("costo-mb");

let inputNombreObra = document.getElementById("nombre-obra");
let inputDuracionObra = document.getElementById("duracion-obra");
let inputPesoObra = document.getElementById("peso-obra");

let cajaResultados = document.getElementById("caja-resultados");
let numObraSpan = document.getElementById("num-obra");


// 3. PASO 1: CONFIGURACION E INICIALIZACION

btnConfigurar.addEventListener("click", function() {
    let cant = inputCantObras.value;
    let tiempo = inputTiempoTransf.value;
    let costo = inputCostoMb.value;

    if (cant > 0 && tiempo > 0 && costo > 0) {
        totalObrasAIngresar = cant * 1;
        tiempoTransfPorMB = tiempo * 1;
        costoMensualPorMB = costo * 1;

        inputCantObras.disabled = true;
        inputTiempoTransf.disabled = true;
        inputCostoMb.disabled = true;
        btnConfigurar.disabled = true;

        inputNombreObra.disabled = false;
        inputDuracionObra.disabled = false;
        inputPesoObra.disabled = false;
        btnGuardar.disabled = false;
    } else {
        alert("Por favor, ingrese valores válidos mayores a cero.");
    }
});


// 4. PASO 2: CARGA Y VALIDACION DE CADA OBRA

btnGuardar.addEventListener("click", function() {
    let nombre = inputNombreObra.value;
    let duracion = inputDuracionObra.value;
    let peso = inputPesoObra.value;

    if (nombre != "" && duracion > 0 && peso > 0) {
        let nuevaObra = {
            nombre: nombre,
            duracion: duracion * 1,
            peso: peso * 1
        };

        obras.push(nuevaObra);
        contadorObras = contadorObras + 1;

        inputNombreObra.value = "";
        inputDuracionObra.value = "";
        inputPesoObra.value = "";

        if (contadorObras < totalObrasAIngresar) {
            numObraSpan.innerText = contadorObras + 1;
        } else {
            inputNombreObra.disabled = true;
            inputDuracionObra.disabled = true;
            inputPesoObra.disabled = true;
            btnGuardar.disabled = true;

            btnCalcular.disabled = false;

            alert("Se completó la carga de obras. Ya puede calcular los resultados.");
        }
    } else {
        alert("Por favor, complete todos los campos con datos válidos.");
    }
});


// 5. PASO 3: CALCULOS Y PRESENTACION DE RESULTADOS

btnCalcular.addEventListener("click", function() {
    let duracionTotal = 0;
    let pesoTotalMB = 0;
    let obraMayorDuracion = obras[0];

    for (let i = 0; i < obras.length; i++) {
        let obraActual = obras[i];

        duracionTotal = duracionTotal + obraActual.duracion;
        pesoTotalMB = pesoTotalMB + obraActual.peso;

        if (obraActual.duracion > obraMayorDuracion.duracion) {
            obraMayorDuracion = obraActual;
        }
    }

    let duracionPromedio = duracionTotal / obras.length;  //calculo el promedio dividiendo la duración total por la cantidad de obras
    let tiempoDescargaMs = obraMayorDuracion.peso * tiempoTransfPorMB;
    let presupuestoAnual = pesoTotalMB * costoMensualPorMB * 12; //presupuesto anual multiplicando el peso total por el costo mensual y x 12 meses/1 AÑO


//5. PASO 4:  MUESTAR DE RESULTADOS USANDO INNERHTML
    cajaResultados.innerHTML =
        "<p><strong>1. Duración total:</strong> " + duracionTotal + " min</p>" +
        "<p><strong>Duración promedio:</strong> " + duracionPromedio + " min</p>" +
        "<p><strong>2. Obra de mayor duración:</strong> " +
        obraMayorDuracion.nombre + " (" +
        obraMayorDuracion.duracion + " min)</p>" +
        "<p><strong>Tiempo de transferencia para descargarla:</strong> " +
        tiempoDescargaMs + " ms</p>" +
        "<p><strong>3. Presupuesto anual de almacenamiento:</strong> $" +
        presupuestoAnual + "</p>";

    btnCalcular.disabled = true;
    btnReiniciar.disabled = false;
});


// 6. REINICIAR EL SISTEMA:
A
// VOLVER VARIABLES A 0  

btnReiniciar.addEventListener("click", function() {
    obras = [];
    totalObrasAIngresar = 0;
    tiempoTransfPorMB = 0;
    costoMensualPorMB = 0;
    contadorObras = 0;

// VACIO DE ARREGLO Y LIMPIAR CAMPOS
    inputCantObras.value = "";
    inputTiempoTransf.value = "";
    inputCostoMb.value = "";
    inputNombreObra.value = "";
    inputDuracionObra.value = "";
    inputPesoObra.value = "";

    numObraSpan.innerText = "1";
    cajaResultados.innerHTML = "";

//DEVOLVER BOTONES Y FORMULARIOS  A SU ESTADO INICIAL
    inputCantObras.disabled = false;
    inputTiempoTransf.disabled = false;
    inputCostoMb.disabled = false;
    btnConfigurar.disabled = false;

    inputNombreObra.disabled = true;
    inputDuracionObra.disabled = true;
    inputPesoObra.disabled = true;
    btnGuardar.disabled = true;
    btnCalcular.disabled = true;
    btnReiniciar.disabled = true;
});
