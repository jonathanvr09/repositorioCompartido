// forma clásica
function sumar(a, b) {
    return a + b;
}
console.log( sumar(2, 4) ); // 6
   
// ES6 arrow function

let suma = (a, b) => a + b;

console.log( suma(2, 4) ); // 6


// Ejemplo 1

let laMitad = numberA => numberA / 2;
 // el parametro (numero) no va entre () porque es uno solo, un solo parametro.
console.log(laMitad(10));


// Ejemplo 2

let  dividirNumeros = (numberB, numberC) => numberB / numberC;
// los parametros (numeroB,C) llevan parentesis ya que son dos parametros ingresas, a diferencia del Ejemplo 1
console.log(dividirNumeros(25, 10));

