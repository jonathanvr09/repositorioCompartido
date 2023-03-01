/* 1) Escribir un programa que muestre en pantalla los números del 1 al 100,
sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
“buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
por la palabra “fizzbuzz”. Visiten este sandbox
https://codesandbox.io/s/fizzbuzz-3e9uc?file=/src/index.js para realizar
el ejercicio ahí. Recuerden desplegar la consola para ver sus resultados, y
utilicen la función console.log para mostrar datos en la misma. */

let compararNumero = (i) =>{
    for(let i = 1;i <= 100;i++){
        if(i % 3 == 0){
            i = 'fizz';
        }
        console.log(i)
    }
}

console.log(compararNumero(0));

