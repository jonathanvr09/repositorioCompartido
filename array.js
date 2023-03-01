// // ARRAY

let nombres = [ "Nacho", "Dario", "JAVIER" ];
let edades = [ 34, 28, 37, 40, 43 ];
let valoresDeVerdad = [ true, false, false];
let variados = [ "Nacho", 34, true, false, edades ];


// // Un dato concreto dentro de un ARRRAY
console.log(valoresDeVerdad[0]);


// // ARRAYS dentro de ARRAY 
console.log(variados[4][1]);


// DEMOSTRACION  1
let numbers =[22, 33, 54, 66, 72] 

console.log(numbers.length); 


// DEMOSTRACION  2
let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk", 
"Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]

console.log(grupoDeAmigos[5]); 


// DEMOSTRACION 3 
let str = "un string cualquiera" 

let arrayAleatorio= ["Digital", "House", true, "string", "123","false", 54, str ] 

console.log(arrayAleatorio[arrayAleatorio.length - 1]);


//Colecciones de películas (y más…) 

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

let convertirEnMayusculas = (arreglo)=>{
    return arreglo.toUpperCase(peliculas)
}
console.log(convertirEnMayusculas);



//EXTRA ARRAY

function propiedadUnica(arr, str) {
    let res = [];
  
    for (let i = 0; i < arr.length; i++) {
      let obj = {
        [str]: arr[i][str],
      };
      res.push(obj);
    }
    return res;
  }
  let objetoCambiado = propiedadUnica(array, "edad");
  console.log(objetoCambiado);
