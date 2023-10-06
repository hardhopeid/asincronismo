function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num1);
}

console.log(calc(5, 5, sum));



function mensaje(mensajeCaptura) {
    return "El mensaje enviado es: " + mensajeCaptura;
}

function elEnvioMensaje(mensajeCaptura, llamadaSegunda) {
    return llamadaSegunda(mensajeCaptura);
}

console.log(elEnvioMensaje('Amo mucho a mi amorcito.', mensaje));

setTimeout (function () {
    console.log (' Hola Mundo JavaScript.');
}, 5000)

function saludos(nombre) {
    console.log (`Estoy saludando a ${nombre}`);
}

setTimeout (saludos, 5000, "Mariano");