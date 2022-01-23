let botones = document.getElementsByTagName("button");
let valor1 = 0;
let indicador = "";
let screen = document.getElementById("input");
let anterior = true

function escribir(input) {
    let i = screen.value.length;
    let coma = screen.value.substr(screen.value.length - 2, 2);
    console.log(coma);
    if (coma == ".0") {
        if (anterior) {
            screen.value = screen.value.substr(0, screen.value.length - 1) + input;
            anterior = false;
        } else {
            screen.value = screen.value + input;
            anterior = true;
        }
    } else {
        screen.value = screen.value + input;
    }
}

function borrar() {
    screen.value = parseFloat(screen.value.substr(0, (screen.value.length - 1)));
}

// function operacion(opcion) {
//     anterior = true;
//     switch (opcion) {
//         case 1:
//             valor1 = parseFloat(screen.value);
//             indicador = "dividir";
//             screen.value = "";
//             break;
//         case 2:
//             valor1 = parseFloat(screen.value);
//             indicador = "multiplicar";
//             screen.value = "";
//             break;
//         case 3:
//             valor1 = parseFloat(screen.value);
//             indicador = "restar";
//             screen.value = "";
//             break;
//         case 4:
//             valor1 = parseFloat(screen.value);
//             indicador = "sumar";
//             screen.value = "";
//             break;
//         case 5:
//             valor1 = parseFloat(screen.value);
//             indicador = "porcentaje";
//             screen.value = "";
//             break;
//         default:
//     }
// }

// function igual() {
//     anterior = true;
//     let valor2 = parseFloat(screen.value);
//     if (indicador == "dividir") {
//         let resultado = parseFloat(valor1 / valor2);
//         screen.value = resultado;
//     }
//     if (indicador == "sumar") {
//         let resultado = parseFloat(valor1 + valor2);
//         screen.value = resultado;
//     }
//     if (indicador == "restar") {
//         let resultado = parseFloat(valor1 - valor2);
//         screen.value = resultado;
//     }
//     if (indicador == "multiplicar") {
//         let resultado = parseFloat(valor1 * valor2);
//         screen.value = resultado;
//     }
//     if (indicador == "porcentaje") {
//         let resultado = parseFloat(valor1 / 100 * valor2);
//         screen.value = resultado;
//     }
// }

function despejar() {
        screen.value = "";
        indicador = "";
        valor1 = 0;
}

let valores = [];
let v = 0;

function operacion(opcion) {
    anterior = true;
    console.log("anda")
    switch (opcion) {
        case 1:
            valores[v] = parseFloat(screen.value);
            indicador = "dividir";
            screen.value = "";
            break;
        case 2:
            valores[v] = parseFloat(screen.value);
            indicador = "multiplicar";
            screen.value = "";
            break;
        case 3:
            valores[v] = parseFloat(screen.value);
            indicador = "restar";
            screen.value = "";
            break;
        case 4:
            valores[v] = parseFloat(screen.value);
            indicador = "sumar";
            screen.value = "";
            break;
        case 5:
            valores[v] = parseFloat(screen.value);
            indicador = "porcentaje";
            screen.value = "";
            break;
        default:
    }
    v++;
    console.log(valores);
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