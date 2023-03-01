const prompt = require("prompt-sync")({ sigint: true });

// Micro desafio 1

function test1(x,y){ 
    return y - x
}

test1(10, 40)

console.log (test1(10, 40))

// Micro desafio 2

function test2(x,y) { 
    return x * 2
    console.log (x)
    return x/2
}
 
test2(10)

console.log (test2(10))

// Funciones simples 1

function dePulgadasACentimetros(pulgadas){ 
    
    return ` ${pulgadasUsuario} in equivalen a ${pulgadasUsuario * 2.54} cm`

}

let pulgadasUsuario = prompt("Ingresa número de pulgadas = ")

console.log (dePulgadasACentimetros(pulgadasUsuario))


// Ejercicio 1

function pulgadasCentimetros(pulgada){
    centimetros = pulgada * 2.54
    return centimetros
}

console.log(pulgadasCentimetros(10))

//Ejercicio 2

function url(palabra){
    palabra = `http://www.${palabra}.com`
    return palabra
}

console.log(url("digitalhouse"))

//Ejercicio 3

function admiracion(palabra2){
    palabra2 = `${palabra2}!`
    return palabra2
}

console.log(admiracion("Hot Wings CTG"))

//Ejercicio 4

function edadPerros(edad){
    edadPerro = edad / 7
    return edadPerro
}

console.log(edadPerros(25))

//Ejercicio 5

function horaTrabajo(sueldo){
    horaTrabajo = sueldo / 48
    return horaTrabajo
}

console.log(horaTrabajo(199998))

let horaTrabajo1 = sueldo => sueldo/40

console.log(horaTrabajo1(30000))