let botones = document.getElementsByTagName("button");
let indicador = "";
let pantalla = document.getElementById("input");
let anterior = true;
let habilitador = true;

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
    if (pantalla.value.length > 1) {
        pantalla.value = parseFloat(pantalla.value.substr(0, (pantalla.value.length - 1)));
    } else if (pantalla.value.length == 1) {
        pantalla.value = "";
    }
}

let valor = 0;
let resultado = 0;
let j = false;
let previo = "";

function operacion(opcion) {
    if (pantalla.value != "") {
        anterior = true;
        valor = parseFloat(pantalla.value);
        habilitador = true;

        if (j) {
            if (previo == "dividir") {
                resultado = parseFloat(resultado / valor);
            } else if (previo == "multiplicar") {
                resultado = parseFloat(resultado * valor);
            } else if (previo == "restar") {
                resultado = parseFloat(resultado - valor);
            } else if (previo == "sumar") {
                resultado = parseFloat(resultado + valor);
            } else if (previo == "porcentaje") {
                resultado = parseFloat(resultado / 100 * valor);
            }
        } else {
            resultado = parseFloat(pantalla.value);
        }
    }
    switch (opcion) {
        case 1:
            previo = "dividir";
            pantalla.value = "";
            break;
        case 2:
            previo = "multiplicar";
            pantalla.value = "";
            break;
        case 3:
            previo = "restar";
            pantalla.value = "";
            break;
        case 4:
            previo = "sumar";
            pantalla.value = "";
            break;
        case 5:
            previo = "porcentaje";
            pantalla.value = "";
            break;
        default:
    }
    j = true;
}

function igual() {
    if (habilitador) {
        valor = parseFloat(pantalla.value);
        console.log(resultado)
        console.log(valor)
        anterior = true;
        if (previo == "dividir") {
            resultado = parseFloat(resultado / valor);
        } else if (previo == "multiplicar") {
            resultado = parseFloat(resultado * valor);
        } else if (previo == "restar") {
            resultado = parseFloat(resultado - valor);
        } else if (previo == "sumar") {
            resultado = parseFloat(resultado + valor);
        } else if (previo == "porcentaje") {
            resultado = parseFloat(resultado / 100 * valor);
        }
        pantalla.value = parseFloat(resultado);
        habilitador = false;
        j = false;
    } else {
        pantalla.value = parseFloat(resultado);
    }
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
    j = false;
    valor = 0;
    resultado = 0;
    habilitador = true;
}