// CONDICIONAL IF se cumple

console.log( "=====Ejm1=====" );

let clima = "soleado";
let dia = "domingo";

if ( clima == "soleado" && dia == "domingo"){
    console.log("Lindo dia para pasear");
}


// CONDICIONAL IF no se cumple

console.log( "=====Ejm2=====" );

let mismoClima = "soleado";
let mismoDia = "lunes";

if ( mismoClima == "soleado" && mismoDia == "domingo"){
    console.log("Lindo dia para pasear");
}

// CONDICIONAL ELSE IF (no se cumple IF, si se cumple ELSE IF)

console.log( "=====Ejm3=====" );

let otroClima = "soleado";
let otroDia = "lunes";

if ( otroClima == "soleado" && otroDia == "domingo"){
    console.log("Lindo dia para pasear");
}else if( otroClima == "soleado" && otroDia == "lunes" );
    console.log("Podría salir igualmente")
 
// CONDICIONAL ELSE IF (no se cumple ELSE IF, si se cumple IF)

console.log( "=====Ejm4=====" );

let otroClimaMas = "soleado";
let otroDiaMas = "lunes";

if ( otroClimaMas == "soleado" && otroDiaMas == "lunes"){
    console.log( "Lindo dia para pasear" );
}else if( otroClimaMas == "soleado" && otroDiaMas == "domingo"){
    console.log( "Podría salir igualmente" );
}
    
// CONDICIONAL ELSE (no se cumple IF, no se cumple ELSE IF, si se cumple ELSE)

console.log( "=====Ejm5=====" );

let nuevoClima = "lluvia";
let nuevoDia = "lunes";

if ( nuevoClima == "soleado" && nuevoDia == "domingo" ){
    console.log( "Lindo dia para pasear" );
}else if( nuevoClima == "soleado" && nuevoDia == "domingo"){
    console.log( "Podría salir igualmente" );
}else{
    console.log( "Mejor me quedo en casa papu." );
}
    

// IF TERNARIO 1 
console.log( "=====Ejm6=====" );

let fruta = "Cereza";

let resultado = fruta == "Cereza" ? "Buenisimo, me encanta la cereza" : "Ufa, queria cereza";
console.log(resultado);


// IF TERNARIO 2 
console.log( "=====Ejm7=====" );

let fruta2 = "Mango";

let resultado2 = fruta2 == "Cereza" ? "Buenisimo, me encanta la cereza" : "Ufa, queria cereza";
console.log(resultado2);


// SWITCH con valor
console.log( "=====Ejm8=====" );

let semaforo = "Verde";

switch(semaforo){
    case "Verde":
        console.log( "Puedo cruzar" );
        break;
    case "Amarillo":
        console.log( "Precaucion" );
        break;
    case "Rojo":
        console.log( "No puedo cruzar" );
        break;
}


// SWITCH sin valor o un valor diferente
console.log( "=====Ejm9=====" );

let stoplight = " ";

switch(stoplight){
    case "Green":
        console.log( "Puedo cruzar" );
        break;
    case "Yellow":
        console.log( "Precaucion" );
        break;
    case "Red":
        console.log( "No puedo cruzar" );
        break;
    default:
        console.log( "No funciona el semaforo" );
        break;  
}


// OTROS

console.log( "=====EjmXX=====" );

const prompt = require("prompt-sync")({ sigint: true });

let numero1 = parseInt(prompt("Ingrese un numero "));
let numero2 = parseInt(prompt("Ingrese otro numero "));
// let noIdentificado = "No identificado";

let eligeOperacion = prompt( "Que operacion deseas realizar?" ,"1 = suma",'\n', "2 = resta",'\n', "3 = multiplicar",'\n', "4 = dividir");

if (eligeOperacion = 1){
    console.log(numero1 + numero2) 

} else if (eligeOperacion = 2){
    console.log(numero1 - numero2)

} else if (eligeOperacion = 3){
    console.log(numero1 * numero2)
    
} else if (eligeOperacion = 4){
    console.log(numero1/ numero2)

}

