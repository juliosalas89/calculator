// let resultado = 0;
// let ventanaRes = document.getElementById("result");

// function sumar() {
//     let valor = parseInt(document.getElementsByTagName("input")[0].value);
//     console.log(valor);
//     resultado = (resultado + valor);
//     console.log(resultado);
// }

// function igual(){
//     ventanaRes.innerText = resultado;
// }

// function restar() {
//     let valor = parseInt(document.getElementsByTagName("input")[0].value);
//     console.log(valor);
//     resultado = (resultado - valor);
//     console.log(resultado);
// }

let ventanaRes = document.getElementById("result");
let valor1 = 0;
let indicador = "";
let screen = document.getElementsByTagName("input")[0];

function dividir() {
    valor1 = parseInt(document.getElementsByTagName("input")[0].value);
    indicador = "dividir";
    screen.value = "";
}

function sumar() {
    valor1 = parseInt(document.getElementsByTagName("input")[0].value);
    indicador = "sumar";
    screen.value = "";
}

function restar() {
    valor1 = parseInt(document.getElementsByTagName("input")[0].value);
    indicador = "restar";
    screen.value = "";
}

function multiplicar() {
    valor1 = parseInt(document.getElementsByTagName("input")[0].value);
    indicador = "multiplicar";
    screen.value = "";
}

function igual() {
    let valor2 = parseInt(document.getElementsByTagName("input")[0].value);
    if (indicador == "dividir") {
        let resultado = (valor1/valor2);
        screen.value = resultado;
    }
    if (indicador == "sumar") {
        let resultado = (valor1+valor2);
        screen.value = resultado;
    }
    if (indicador == "restar") {
        let resultado = (valor1-valor2);
        screen.value = resultado;
    }
    if (indicador == "multiplicar") {
        let resultado = (valor1*valor2);
        screen.value = resultado;
    }
}
