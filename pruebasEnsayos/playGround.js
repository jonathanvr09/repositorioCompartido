// VARIABLES Y TIPOS DE DATOS

/* Ejercicio 1: declarar dos variables
Nuestra tarea será declarar dos variables: una con el nombre edad y la otra con el nombre peso.*/

/* Ejercicio 2: Asignando valores a las variables
Declaremos dos variables llamadas edad y peso, a las cuales debemos asignarles un valor numérico.*/

let edad = 27;
let peso = 76;

console.log(edad, peso);

/* Ejercicio 3: Constantes - P Imp
Más adelante vamos a querer validar que nuestros encuestados sean de 18 años de edad mínima 
y 99 años de edad máxima. Nadie puede cambiar esas definiciones, por lo tanto, vamos a escribirlas en dos constantes.

Ahora, debemos crear una constante llamada EDAD_MINIMA y otra llamada EDAD_MAXIMA, 
a las cuales les asignaremos valores numéricos 18 y 99 respectivamente .*/

const edad_minima = 18;
const edad_maxima = 99;

console.log(edad_minima, edad_maxima);

const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

console.log(EDAD_MINIMA, EDAD_MAXIMA);

/* Para este ejercicio, debemos declarar 4 variables de tipo let 
con los nombres: verdadero, nada, texto y numero. A cada una de ellas, 
tendremos que asignarle el tipo de dato que sugiera su nombre, según corresponda.*/ 

let verdadero = true;
let nada = null;
let texto = "Hola como estás";
let numero = 8;

/*Declarar y asigna dos variables: primerNumero y segundoNumero.
Luego, declarar las variables resultadoSuma, resultadoResta, resultadoMultiplicacion, 
resultadoDivision y en cada una almacena el resultado que corresponda.
Por último, imprimir cada uno de los resultados utilizando console.log(nombreDeLaVariable).*/

let primerNumero = 100
let segundoNumero = 5

let resultadoSuma = primerNumero + segundoNumero 
let resultadoResta = primerNumero - segundoNumero 
let resultadoMultiplicacion = primerNumero * segundoNumero 
let resultadoDivision = primerNumero / segundoNumero 

// FUNCTIONS


/*Ejercicio 1: Declarar funciones
Empecemos a practicar cómo crear funciones.

Nuestra tarea es crear una función que se va a llamar ejemplo y 
tiene que devolver un String diciendo "hola, soy una función".*/

function ejemplo(){
    return 'hola, soy una función';
}


/* Ejercicio 2: Declarando funciones en variables
¡Vamos a crear una función y asignarla a una variable!

Primero creamos una variable con el nombre  ejemplo y le asignamos como valor una función. 
La misma debe retornar un String que diga: "hola, soy una función expresada". */

let ejemplo = function hola(){
    return "hola, soy una función expresada";
}


/* Ejercicio 3: JS_funciones_parametros_a_la_función
En el ejemplo que presentamos hay una función que ya está creada, 
pero sucede que cuando la invocamos, no funciona. Eso es porque la función necesita ciertos parámetros y no los tiene.

Debemos modificar el código que ya está escrito para agregarle los parámetros que la función necesita. */

/* function saludar() {
    return 'Hola, ' + nombre + ' ' + apellido + '!';
} */  //Sintaxis inicial

function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}

console.log(saludar("Jonathan", "Vargas"));

/* Ejercicio 4: Declarando tres funciones
¿Se acuerdan cuando declarábamos variables para poder utilizarlas luego? Bueno, 
aquí podemos hacer algo similar, pero en lugar de declarar variables (estructuras que contienen información) 
podemos declarar funciones (estructuras que procesan información).

Escribir las siguientes tres funciones:

anterior: recibe un número como parámetro y devuelve ese número menos uno.
triple: recibe un número como parámetro y devuelve el triple de ese número.
anteriorDelTriple: recibe un número como parámetro y, utilizando las dos funciones anteriores, 
tendrá que devolver el número recibido multiplicado por 3 (tres) y al resultado restarle 1 (uno).
Aclaración: este ejercicio conlleva cierta complejidad. Es normal que se tarde en llegar a la solución. */

function anterior(numA){
    return numA - 1
}

function triple(numB){
    return numB * 3
}

function anteriorDelTriple(numC){
    return (numC * 3) - 1
}


// ARROW FUNCTION

/* Ejercicio 1: convertir a arrow
Empecemos por practicar la sintaxis de una arrow function que no recibe parámetros.

Para este ejercicio vamos a dar tres funciones ya definidas. Nuestro trabajo será 
cambiarle la sintaxis y volver a escribirlas para que sean funciones de tipo arrow. */


/* function dameCinco() {
    return [1,2,3,4,5];
}

function multiplicarPorDos() {
  return 123 * 2 ;
}

function mostrarNombre() {
  return "Mi nombre es Hernán";
}
 */  //Sintaxis inicial

 let dameCinco = () => {
    return [1,2,3,4,5];
}

let multiplicarPorDos = () => {
  return 123 * 2 ;
}

let mostrarNombre = () => {
  return "Mi nombre es Hernán";
}


/* Ejercicio 2: convertir a arrow 2 (con parámetro)
Ahora nuestro trabajo será refactorizar la función saludar() que recibe un parámetro, es decir, 
escribirla con la sintaxis necesaria para convertirla en una arrow function. */

/* function saludar(nombre) {
    return 'Hola, ' + nombre + '!';
} */  //Sintaxis inicial

let saludar = nombre => 'Hola, ' + nombre + '!';

nombre = "Ezequiel"

/* Ejercicio 3: convertir a arrow 2 (con mas parámetros)
¡Vamos a pasar nuestra función declarada a una arrow!



Y sí, solo nos falta practicar la sintaxis de una arrow function que reciba más de un parámetro. Tomemos la función saludar(), que esta vez recibe un nombre y un apellido, y veamos de convertirla en una arrow function. */

/*function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' +  apellido + '!';
} */   //Sintaxis inicial

let saludar = (nombre, apellido) => {
    return 'Hola, ' + nombre + ' ' +  apellido + '!';
}


// IF, ELSE IF, ELSE.

/* Mi primer if
Lograremos con este ejercicio realizar un simple if.

Declaremos una variable con el nombre dato y asignémosle un valor booleano.

Luego, deberemos hacer un if que evalúe esa variable y, si el valor es igual a  true, 
que imprima por consola "es true". Caso contrario, que imprima por consola "es false". */

let dato = true;
if( dato == true ){
    console.log( "es true")
}


/* Igualdad, if y else
¡Juguemos con condiciones!

En este ejercicio nos viene dada una variable llamada lenguaje, que tiene asignado un string. 
Nuestro trabajo es construir un condicional if/else para que, si la variable contiene "javascript", 
imprima por consola el texto "Estoy aprendiendo". De lo contrario, que imprima"Lo aprenderé más adelante". */

let lenguaje = "javascript";

if( lenguaje == "javascript"){
    console.log( "Estoy aprendiendo")
}else if( lenguaje !== "javascript"){
    console.log("Lo aprenderé más adelante");
}


/* ¿Puede pasar cosme fulanito?
¡Vamos a completar la función!

Debemos completar la función puedePasar para que, analizando el nombre que recibe por parámetro, 
determine si la persona puede pasar o no. Si la persona se llama "Cosme Fulanito"", 
no lo dejará pasar y lo indicará retornando false; 
si la persona se llama de otra forma, lo dejará pasar y lo indicará retornando true. */

function puedePasar (nombre){
    if( nombre == "Cosme Fulanito" ){
       return false
    }else if( nombre == "Natalia Natalia" ){
       return true
    }else if( nombre == "Juan Perez" ){
       return true
    }
}

/* como arrow function:

let puedePasar = (nombre) =>{
    if( nombre == "Cosme Fulanito" ){
       return false
    }else if( nombre == "Natalia Natalia" ){
       return true
    }else if( nombre == "Juan Perez" ){
       return true
    }
} */

// --------Otra forma-------

let puedePasar = (nombre) => {
    if(nombre == "Cosme Fulanito"){
        console.log(false)
    }else if(nombre !== "Cosme Fulanito"){
        console.log(true)
    };
}

puedePasar("Cosme Fulanito");


// IF TERNARIA Y SWITCH

/* Ejercicio 1: Fin de semana
El objetivo de este ejercicio es imprimir en consola un texto que irá variando 
según el día que contenga la variable dia. Para esto, ya presentamos un código hecho con if/else 
que tendremos que modificar y convertirlo a un switch, manteniendo el mismo resultado. */

/* let dia = 'jueves'
function finDeSemana (dia) {	
	if (dia == 'viernes') {
    	console.log('buen finde')
	} else if (dia == 'lunes') {
    	console.log('buena semana')
	} else {
    	console.log('buen dia')
	}
} */    //Sintaxis inicial

function finDeSemana (dia){
	switch (dia){	
		case 'viernes':
    		console.log('buen finde');
			break;
    	case 'lunes':
			console.log('buena semana');
			break;
		default:
			console.log('buen dia');
			break;
	}
} 

finDeSemana("jueves");



/* Ejercicio 2: Tengo clases
El objetivo de este ejercicio es imprimir en pantalla un texto que estará condicionado de la siguiente manera. 
Utilizando switch deberemos evaluar si la variable "día" es lunes, miércoles o viernes; 
y, en ese caso, debe imprimir el texto "tenés clases".
Para cualquier otro caso debe imprimir "no tenés clases". */

/* function tengoClases(dia) {
	switch (____) {
    	//Escribe tu código aquí
	}
} */ // Sintaxis inicial

function tengoClases(dia) {
	switch (dia) {
		case "lunes":
			console.log("tenés clases");
			break;
		case "miércoles":
			console.log("tenés clases");
			break;
		case "viernes":
			console.log("tenés clases");
			break;
		default: 
			console.log("no tenés clases");
	}
}

// Otra solucion:
function tengoClases(dia) {
	switch (dia) {
		case "lunes":
			console.log("tenés clases");
			break;
		case "miércoles":
			console.log("tenés clases");
			break;
		case "viernes":
			console.log("tenés clases");
			break;
		default: 
			console.log("no tenés clases");
	}
}

tengoClases("jueves");


// ESTRUCTURA FOR

/* Ejercicio 1: Estructura for1
Vamos a programar una función que se comporte como un loro. Sí, todo lo que "oye", ¡lo repite!

La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola. */

let letter = "oye, ¡repite!";

let loro = (letter)=>{
    for(let i = 1 ; i <= 5 ; i++){
        console.log(letter);
    }
}


// Para ver en consolta:
let text = "oye, ¡repite!";

let parrot = (text)=>{
    for(let i = 1 ; i <= 5 ; i++){
        console.log(text);
    }
}

parrot(text);


/* Ejercicio 2: Estructura for 2
¡Vamos a crear una función interesante!

En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número X 
por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) 
y luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for .

Ejemplo:

console.log(noParesDeContarImparesHasta(4)) // imprime por pantalla el valor 2, 
que se obtiene de contar 1 y 3. Los valores 0, 2 y 4 no los contabiliza por ser números pares */

function noParesDeContarImparesHasta(numero){
    let constante=0;
    for(let i = 1 ; i <= numero; i++){
        i%2!=0 ? constante = constante+1 : false;
    }
return constante;

}


// ESTRUCTURA WHILE


// METODOS ARRAY


// Ejercicio 1: Join()
// Si lo juntamos, todo tiene sentido.
// Tenemos un array con palabras sueltas que, juntas, forman una gran frase.
// Queremos, utilizando un método de array sobre la arrayFrase , convertirlo en una oración entera, y almacenar ese String en una variable llamada fraseNueva.
// Ejemplo:
// console.log(fraseNueva); // "No he fracasado, simplemente me he topado con diez mil soluciones equivocadas"
let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ]; // Sintaxis inicial
  
  let fraseNueva = (arrayFrase.join(" "));


/*   Ejercicio 2: pop()
  ¡Sí! ¡Alexis se egresó del terciario!
  Para este ejercicio contamos con el array estudiantes, en donde, en cada índice, almacena un objeto con las propiedades nombre, promedio y curso.
  Queremos sacar a Alexis, que acaba de egresar, y sabemos que está último en ese array.
  Para eso debemos, utilizando un método de array, guardar los datos de Alexis en una variable nueva llamada alumnoEgresado. */
let estudiantes = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];  // Sintaxis inicial
  
  let alumnoEgresado = (estudiantes.pop("Alexis"));


/*  Ejercicio 3: push()
Se inscribieron dos estudiantes nuevos y queremos agregarlos al final del array estudiantes.
Nuestro trabajo será agregar de a un alumno por vez, utilizando algún método de array.
Los valores de cada uno son:
nombre: Juan
promedio: 5
curso: iOS
------------------
nombre: Miguel
promedio: 2
curso: Android*/
let students = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]
  
  let ingreso1 = {nombre: 'Juan',
      promedio : 5,
      curso : 'iOS'};
  
  let ingreso2 = {nombre: 'Miguel',
      promedio : 2,
      curso : 'Android'}; // Sintaxis inicial
  
students.push(ingreso1);
students.push(ingreso2);



/* 
Ejercicio 1: JS Funciones URL completa
Debemos crear una función llamada dominio que recibirá un string como "digitalhouse.com.ar" y su función será retornar: "http://www.digitalhouse.com.ar". */

function dominio (pagina){
    return "http://www." + pagina
}
dominio("digitalhouse.com.ar")


/* Lo primero que necesitamos es declarar una variable llamada texto, asignándole como valor un texto (string), el que queramos. Luego, utilizando la propiedad length, tendremos que imprimir en consola el total de caracteres que contiene la frase. */

let texto2 =  "jonathan"
texto.length




