/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

let purosEnteros = [

    [ 4, 6, 82, 4, 25],
    [15, 76, 3, 7, 9],
    [68, 3, 91, 4, 6],
    [4, 6, 12, 81, 33],
    [19, 54, 3, 78, 11],

]

/**
 * Luego, escribe un algoritmo que recorra e imprima
 *  los valores uno por uno.
 */




//Matriz 2 dimensiones generada automaticamente
// // a) crear una función que retorne la suma de todos los elementos de la matriz.

const generaMatriz = () => {

    let matrizResul = [];

    for (let i = 0; i < 10; i++) {
        matrizResul.push([])
        for (let j = (((i + 1) * 10) - 9); j <= ((i + 1) * 10); j++) {
            matrizResul[i].push(j)
        }
    }

    return matrizResul
}

console.table (generaMatriz())

let suma = 0

for( let i = 0; i < matrizResul.length; i++ ){
    for( let j = 0; j < matrizResul[i].length; j++){
        suma += matrizResul[i][j]
    }
}
console.log(suma());

// 2) Dada el siguiente cuadro, armar la matriz de 10x10, la cual deberá quedar así:


// // let matrix = [

// //      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// //      [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
// //      [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
// //      [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
// //      [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
// //      [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
// //      [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
// //      [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
// //      [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
// //      [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],

// // ];

// // a) crear una función que retorne la suma de todos los elementos de la matriz.


// let suma = 0

// for( let i = 0; i < matrix.length; i++ ){
//     for( let j = 0; j < matrix[i].length; j++){
//         suma += matrix[i][j]
//     }
// }
// console.log(suma);

function sumaAscendente(matriz) {
    let sumatoria = 0;
    for (let i = 0; i < matriz.length; i++) {
      sumatoria += matriz[i][i];
    }
    return sumatoria;
  }
  console.log(sumaAscendente(matrizDe10));
  
  function sumaDescendente(matriz) {
    let sumatoria = 0;
    for (let i = 0; i < matriz.length; i++) {
      sumatoria += matriz[i][matriz.length - (1 + i)];
    }
    return sumatoria;
  }
  console.log(sumaDescendente(matrizDe10));
  function sumaAscendente(matriz) {
    let sumatoria = 0;
    for (let i = 0; i < matriz.length; i++) {
      sumatoria += matriz[i][i];
    }
    return sumatoria;
  }
  console.log(sumaAscendente(matrizDe10));
  
