let botones = document.getElementsByTagName("button");
let valor1 = 0;
let indicador = "";
let pantalla = document.getElementById("input");
let anterior = true
let valores = [];
let resultados = [];
let j = 0;
let previo = "";

function escribir(input) {
    let i = pantalla.value.length;
    let coma = pantalla.value.substr(pantalla.value.length - 2, 2);
    if (coma == ".0") {
        if (anterior) {
            pantalla.value = (pantalla.value.substr(0, pantalla.value.length - 1)) + (input);
            anterior = false;
        } else {
            pantalla.value = (pantalla.value) + (input);
            anterior = true;
        }
    } else {
        pantalla.value = (pantalla.value) + (input);
    }
}

function borrar() {
    pantalla.value = parseFloat(pantalla.value.substr(0, (pantalla.value.length - 1)));
}

// function operacion(opcion) {
//     anterior = true;
//     switch (opcion) {
//         case 1:
//             valor1 = parseFloat(pantalla.value);
//             indicador = "dividir";
//             pantalla.value = "";
//             break;
//         case 2:
//             valor1 = parseFloat(pantalla.value);
//             indicador = "multiplicar";
//             pantalla.value = "";
//             break;
//         case 3:
//             valor1 = parseFloat(pantalla.value);
//             indicador = "restar";
//             pantalla.value = "";
//             break;
//         case 4:
//             valor1 = parseFloat(pantalla.value);
//             indicador = "sumar";
//             pantalla.value = "";
//             break;
//         case 5:
//             valor1 = parseFloat(pantalla.value);
//             indicador = "porcentaje";
//             pantalla.value = "";
//             break;
//         default:
//     }
// }

// function igual() {
//     anterior = true;
//     let valor2 = parseFloat(pantalla.value);
//     if (indicador == "dividir") {
//         let resultado = parseFloat(valor1 / valor2);
//         pantalla.value = resultado;
//     }
//     if (indicador == "sumar") {
//         let resultado = parseFloat(valor1 + valor2);
//         pantalla.value = resultado;
//     }
//     if (indicador == "restar") {
//         let resultado = parseFloat(valor1 - valor2);
//         pantalla.value = resultado;
//     }
//     if (indicador == "multiplicar") {
//         let resultado = parseFloat(valor1 * valor2);
//         pantalla.value = resultado;
//     }
//     if (indicador == "porcentaje") {
//         let resultado = parseFloat(valor1 / 100 * valor2);
//         pantalla.value = resultado;
//     }
// }

function operacion(opcion) {
    anterior = true;
    if (j > 0) {
        if (previo == "dividir") {
            resultados[j] = parseFloat(parseFloat(resultados[j - 1]) / parseFloat(valores[j]));
        } else if (previo == "multiplicar") {
            resultados[j] = parseFloat(parseFloat(resultados[j - 1]) * parseFloat(valores[j]));
        } else if (previo == "restar") {
            resultados[j] = parseFloat(parseFloat(resultados[j - 1]) - parseFloat(valores[j]));
        } else if (previo == "sumar") {
            resultados[j] = parseFloat(parseFloat(resultados[j - 1]) + parseFloat(valores[j]));
        } else if (previo == "porcentaje") {
            resultados[j] = parseFloat(parseFloat(resultados[j - 1]) / 100 * parseFloat(valores[j]));
        }
        console.log(resultados);
    } else {
        resultados[j] = parseFloat(pantalla.value);
    }

    switch (opcion) {
        case 1:
            valores[j] = parseFloat(pantalla.value);
            previo = "dividir";
            pantalla.value = "";
            break;
        case 2:
            valores[j] = parseFloat(pantalla.value);
            previo = "multiplicar";
            pantalla.value = "";
            break;
        case 3:
            valores[j] = parseFloat(pantalla.value);
            previo = "restar";
            pantalla.value = "";
            break;
        case 4:
            valores[j] = parseFloat(pantalla.value);
            previo = "sumar";
            pantalla.value = "";
            break;
        case 5:
            valores[j] = parseFloat(pantalla.value);
            previo = "porcentaje";
            pantalla.value = "";
            break;
        default:
    }
    j++;
}

function igual() {
    anterior = true;
    if (previo == "dividir") {
        resultados[j] = (resultados[j - 1] / valores[j]);
    } else if (previo == "multiplicar") {
        resultados[j] = (resultados[j - 1] * valores[j]);
    } else if (previo == "restar") {
        resultados[j] = (resultados[j - 1] - valores[j]);
    } else if (previo == "sumar") {
        resultados[j] = (resultados[j - 1] + valores[j]);
    } else if (previo == "porcentaje") {
        resultados[j] = (resultados[j - 1] / 100 * valores[j]);
    }
    pantalla.value = parseFloat(resultados[j]);
    console.log(resultados);
}

function resaltar(input) {
    for (let i = 0; i < 18; i++) {
        botones[i].className = "border botones_chicos rounded-0 btn btn-light botones desmarcar"
    }
    botones[18].className = "rounded-0 boton_grande btn btn-primary botones boton_igual desmarcar"
    botones[input].className = "border botones_chicos rounded-0 btn btn-light botones marcar"
}

function resaltarMas() {
    for (let i = 0; i < 18; i++) {
        botones[i].className = "border botones_chicos rounded-0 btn btn-light botones desmarcar"
    }
    botones[18].className = "rounded-0 boton_grande btn btn-primary botones boton_igual marcar"
}

function despejar() {
    pantalla.value = "";
    previo = "";
    valor1 = 0;
    v = 0;
    valores = [];
    resultados = [];
}