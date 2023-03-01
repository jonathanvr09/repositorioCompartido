/* 1. Crear la estructura adecuada para guardar las siguientes películas: 
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella" 
Importante: verificá que todo funciona correctamente accediendo a alguna 
de las películas una vez creada la estructura correspondiente.  */

let peliculas = [ "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella" ];
// console.log(peliculas[2]);


// /* 2. Más tarde, de producción dieron el aviso de que las películas deberían 
// estar todas en mayúsculas. Para esto solicitan que crees una función que reciba 
// por parámetro un array y convierta el contenido de cada elemento a mayúsculas. 
// Pista: revisá qué hace el método de strings .toUpperCase().  */


let convertidor = ( arreglo ) =>{

    let arregloVacio = [];
    for( let i = 0; i < arreglo.length; i++ ){

        peliculas[i] = peliculas[i].toUpperCase();
        arregloVacio.push(peliculas[i]);

    }; 

    return arregloVacio; 

};

console.log(convertidor(peliculas));


// /* 3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay
// que crear otra estructura similar a la primera, pero con las siguientes películas
// animadas:
// "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// Por lo tanto, te piden crear una función que reciba dos arrays como
// parámetros, para poder agregar los elementos contenidos en el segundo array
// dentro del primero, y así retornar un solo array con todas las películas como
// sus elementos.
// Importante: las películas animadas también deberían convertirse a
// mayúsculas.
//  */



// let nuevoConvertidor = ( arrayVacio, peliculasAnimadas ) =>{

//     arrayVacio = [];
//     peliculasAnimadas = [ "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite" ];

//     for ( let i = 0; i < peliculasAnimadas.length; i++ ){
//         peliculasAnimadas[i] = peliculasAnimadas[i].toUpperCase();
//         arrayVacio.push(peliculasAnimadas[i]);
//     };

//     return arrayVacio;


// };
// console.log(nuevoConvertidor());


// /* 4. Durante el proceso, uno de los desarrolladores advierte que el último elemento
// del array de películas animadas es un videojuego. Ahora tenés que editar el
// código y modificarlo de manera que puedas eliminar ese último elemento antes
// de migrar el contenido al array que contenga todas las peliculas
// PD: por precaución, guardá el elemento que vas a eliminar en una variable.

// */

let nuevoConvertidor = ( arrayVacio, peliculasAnimadas ) =>{

    arrayVacio = [];
    peliculasAnimadas = [ "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite" ];

    for ( let i = 0; i < peliculasAnimadas.length; i++ ){
        peliculasAnimadas[i] = peliculasAnimadas[i].toUpperCase();
        arrayVacio.push(peliculasAnimadas[i]);
    };

    let esVideoJuego = arrayVacio.pop();
    // console.log(" Videojuego: " + esVideoJuego);
    return arrayVacio;

};
console.log(nuevoConvertidor());


// /* 5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
// del mundo sobre las películas con el siguiente formato:

// const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// Te piden crear una función que compare las calificaciones e indique si son
// iguales o diferentes. Te confirman que están en el orden adecuado y que solo
// traen valores numéricos del 1 al 10.

// PD: los elementos de los scores tanto de Asia como de Europa corresponden
// en orden al del array resultante de combinar películas con películas animadas.
// Es decir, el primer elemento del array de películas general corresponde al
// primer elemento de asiaScores y al primer elemento de euroScores, y así
// sucesivamente.

// Para verificar que hasta acá viene todo bien, te recomendamos probar cada una de
// las funciones y testear su correcto funcionamiento.
// Si llegaste hasta este punto y está todo bien, el tech leader del equipo debe estar
// extremadamente alegre con tu trabajo y desempeño. ¡Buen trabajo! */

compilacionPeliculas = [ 'STAR WARS', 'TOTORO', 'ROCKY', 'PULP FICTION', 'LA VIDA ES BELLA', 
'TOY STORY', 'FINDING NEMO', 'KUNG-FU PANDA', 'WALLY']


const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];


let comparar = () => {

    let x = asiaScores;
    let y = euroScores;
    let operacion = [];

    for( let i = 0; i ; i++ ){
    
        if( asiaScores[i] == euroScores[i] ){
          operacion =  "Es igual"

        }else{
           operacion = "Es diferente"
        };

    };

    return operacion;

};

console.log(comparar());


// PRACTICAMOS FOR, ARREGLOS, OBJETOS y CONDICIONALES

// 1) DADO EL SIGUIENTE ARREGLO....

let numeros = [5, 9, 12, 25, 6, 7, 18, 1, 24, 4]

// DETERMINAR LA SUMA TOTAL DE ELLOS , SOLAMENTE SUMANDO LOS NUMEROS IMPARES 
// Y GUARDARDO EN UNA VARIABLE QUE SE LLAME RESULTADO. PISTA : 
// ( RECORDA QUE PODEMOS GUARDAR LA  EJECUCION DE UNA FUNCION
// Y LO QUE RETORNE SERA ASIGNADO A LA VARIABLE)
console.log("este es el ejercicio 1")

let sumaImpares = (array) =>{
    let acumulador = 0
    for(i = 0; i < array.length; i ++){
        if((array[i] % 2) != 0){
            acumulador = acumulador + array[i]
        }
    }
    return acumulador
}
let resultado = sumaImpares(numeros)
console.log(resultado);


// 2) DADO EL SIGUEINTE ARREGLO...

const arrayNumeros = [7, 16, 32, 27, 45, 27, 51, 12, 19, 21]

// CREAR UNO NUEVO EL CUAL CONTENDRA LOS NUMERO DE ESTE ARREGLO 
// PERO SOLO LOS NUMERO QUE SEAN MAYORES QUE 15 Y MENORES o IGUALES QUE 30
console.log("este es el ejercicio 2")

let arregloNuevo = [];

let creadorArray = (arreglo) => {
    
    for ( i = 0; i < arreglo.length; i++){
        if( arreglo[i] > 15 && arreglo[i] <= 30){
            arregloNuevo.push(arreglo[i]);
        }
    }
}

creadorArray(arrayNumeros);

console.log(arregloNuevo);


// 3) DADO EL SIGUIENTE ARREGLO...

// let profesionales = [
//     {
//         nombre: "juancito",
//         profesion: "programador"
//     },
//     {
//         nombre: "maria",
//         profesion: "comerciante"
//     },
//     {
//         nombre: "pepito",
//         profesion: "docente"
//     }

// ]

// crear una funcion para que le agregue un metodo a cada objeto
// lo que debe hacer el metodo es retornar un string con el nombre y su profesion
// por ejemplo , " mi nombre es juancito y soy programador"

// LUEGO NOS DIMOS CUENTA QUE NO LE AGREGAMOS LA EDAD A NINGUNA PERSONA
// DEMOS CREAR OTRA FUNCION QUE LE AGREGUE ESA PROPIEDAD A TODOS LOS OBJETOS
// DATO DE COLOR ( LA EDAD DE LAS PERSONAS ES UN AÑO MAS CADA UNA Y LA MAS JOVEN TIENE 41 )

let profesionales = [
    {
        nombre: "juancito",
        profesion: "programador"
    },
    {
        nombre: "maria",
        profesion: "comerciante"
    },
    {
        nombre: "pepito",
        profesion: "docente"
    }

]


let armadorDeMetodos = (array) => {
    for (let i = 0 ; i < array.length ; i++) {
        array[i].metodoString = function(){
            return `Mi nombre es ${this.nombre} y soy ${this.profesion}`
        };
    }
}

armadorDeMetodos(profesionales);

// console.log(profesionales);
console.log(profesionales[0].metodoString());

let adicionEdad = (array) =>  {
    for (let i = 0 ; i < array.length ; i++) {
        array[i].edad = 41 + i
    }
}

adicionEdad(profesionales);
console.log(profesionales);

//

const edades= [11,12,15,18,25,22,10,33,18,5]
let menores= []
let edadMenor= (edades)=> {
    for (let i=0; i<edades.length; i++){
        if (edades[i]<18){
            menores.push(edades[i])
        }

    };
} 

edadMenor(edades)
console.log(menores);



// Deberas escribir un objeto literal llamado estudiantes que contenga las siguientes propiedades que deberas completar con tus datos:

let estudiante = {
    nombre: "Jonathan",
    apellido: "Vargas",
    camada: 1,
    esParcial: true,
    };
    

// let dictadorNota = (array9) => {
//     for (let i = 0 ; i < array9.length ; i++) {
//         array9[i].nota = function(

//         ){
//             return `Mi nombre es ${this.nombre} y soy ${this.profesion}`
//         };
//     }
// }

// dictadorNota(estudiante);
// console.log(estudiante[0].nota());

