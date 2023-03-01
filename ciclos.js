const prompt = require("prompt-sync")({ sigint: true });

// CICLOS / BUCLES 😃

// FOR / WHILE / DO WHILE

// CICLO FOR
// INICIALIZACION / CONDICION / MODIFICADOR
// ITERAR

let contarHastaTres = ()=>{

    for(let i = 1 ; i <= 3 ; i++){

        console.log(i)

    }

}

for (let num=5; num<=20; num++) 
{
  if (num%5==1)
   {
       console.log(num)
       num=num+3
     
   }
}

////////////////////////

let sumarNumeros = () => {
  let resultado = 0; 

  for (let i = 1; i <= 2; i++) {

    console.log(resultado);
    resultado = resultado + i;
  }

  return resultado;
};

console.log(sumarNumeros());
// EJERCICIOS
// 1) Hacer un código que nos muestre los números del 0 al 10.
// 2) Hacer un código en el cual se visualice una
// cuenta de 1 a 10, y a la vez, una cuenta inversa de 10 a 1.




let contarYdescontar = ()=>{

    for(let i = 1 ; i <= 10 ; i++){

        console.log("-------")
        console.log( i )
        console.log(11 - i)
        console.log("-------")
    }

}

contarYdescontar()

// 3) crear una funcion que receiba un numero por parametros y que muestre por consola
// todos los impares que hay en entre el 0 y ese numero, y sumarle 5 a cada uno

let mostraImpares = ( num )=>{


    for(let i = 1 ; i < num ; i++ ){

       if( i % 2 !== 0 ){

        console.log(i + 5)

       }

    }

}

mostraImpares(7)


/* ESTRUCTURA FOR
Vamos a programar una función que se comporte como un loro. Sí, todo lo que "oye", ¡lo repite!

La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola. */

let text = "oye, ¡repite!";

let parrot = (text)=>{
    for(let i = 1 ; i <= 5 ; i++){
        console.log(text);
    }
}

parrot(text);


// ESTRUCTURA WHILE

let vuelta = 1
while(vuelta <= 5){
    console.log("Dando la vuelta numero" + vuelta);
    vuelta++
};

/* Tabla de multinplicar del 1 hasta 10 */

// function tablaDeMultiplicar(numero) {

//     let i = 1;
//     while(numero <= 10){

//         console.log(numero + " * " + i + " = " + i * numero);
//         numero++
//     };
// }

// tablaDeMultiplicar(1);  // Solo un numero


/* Tabla de multinplicar del 1 hasta 10 x del 1 hasta el 10 */
function tablaDeMultiplicar(i) {

    let numero = 1;

    do{ console.log(numero + " * " + i + " = " + i * numero);
        numero++;
    } while(numero <= 10);
    console.log( "==========" );
}

tablaDeMultiplicar(1);
tablaDeMultiplicar(2);
tablaDeMultiplicar(3);
tablaDeMultiplicar(4);
tablaDeMultiplicar(5);
tablaDeMultiplicar(6);
tablaDeMultiplicar(7);
tablaDeMultiplicar(8);
tablaDeMultiplicar(9);
tablaDeMultiplicar(10);

