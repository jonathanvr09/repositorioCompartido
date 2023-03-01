// Funcion expresada

let sumar = function(numberA, numberB){
    return numberA + numberB
}

console.log(sumar(5, 10));
console.log("======================");


// Funcion declarada ejm1

function elDoble(unNumero){
    return unNumero * 2;
}

console.log(elDoble(5));
console.log("======================");


// Funcion declarada ejm2

function restar(numberC, numberD){
    return numberC - numberD;
}

console.log(restar(98, 783));
console.log("======================");


// Funciones

const prompt = require("prompt-sync")({ sigint: true });

function saludar (persona){
    return `hola ${persona}, tanto tiempo sin verte`
 }

 let nombre = prompt("Hola, dime tu nombre: ");

 console.log(saludar (nombre));
 console.log("======================");


// Ejemplo 

let mensaje = "Hola";
console.log(mensaje);
console.log("======================");


// Ejemplo scope local

let mensaje2 = "Holaa";

function saludo2(){
    return mensaje2;
}

console.log(saludo2());
console.log("======================");


// Ejemplo scope global 

let mensaje3 = 'Holaaa';

function saludo3(){
    let mensaje3 = 'Chau'
    return mensaje3;
}

console.log(mensaje3);
console.log("======================");


// Ejemplo scope local y global

let mensaje4 = 'Holaaaa';

function saludo4(){ 
    let mensaje4 = 'Chauu'
    return mensaje4;
}

console.log(mensaje4);
console.log(saludo4());
console.log("======================");
