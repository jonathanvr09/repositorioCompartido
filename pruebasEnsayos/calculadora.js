const prompt = require("prompt-sync")({ sigint: true });

// SUMA
let suma = ( a , b ) =>{
 return a + b

}

// RESTA

let resta = ( a , b ) =>{
    return a - b
   
}
   
// MULTIPLICAR

let multiplicar = ( a , b ) =>{
    return a * b
   
}

// DIVIDIR

let dividir = ( a , b ) =>{
    return a / b
   
}


// Probar SUMA

console.log("-------------- Testeo de Operaciones / Calculadora --------------")

let numero1 = parseInt(prompt("Ingrese un numero "));
let numero2 = parseInt(prompt("Ingrese otro numero "));
console.log('',suma(numero1, numero2),'\n',resta(numero2, numero1),'\n',multiplicar(numero1, numero2),'\n',dividir(numero2 + numero1, numero2));

