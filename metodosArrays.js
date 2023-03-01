// METODO .push(parametro)
let colores = [ "Azul", "Blanco", "Rojo", "Verde" ]
colores.push( "Violeta", "Amarillo" ); 
console.log(colores); // r: ["Azul", "Blanco", "Rojo", "Verde", "Violeta", "Amarillo"]


// METODO .pop()
let nombres = [ "Juana", "Mariana", "Pablo" ];
nombres.pop(); 
console.log(nombres); // r: [ 'Juana', 'Mariana' ]


// METODO .pop() nueva variable para el dato sacado de lista
let names = [ "Juana", "Mariana", "Pablo" ];
let elUltimo = names.pop(); 
console.log(elUltimo); // r: "Pablo"


// METODO .shift()
let apellidos = [ "Vargas", "Rios", "Ibarra", "Palacios" ];
let elPrimero = apellidos.shift(); 
console.log(apellidos); // r: [ "Rios", "Ibarra", "Palacios" ]
console.log(elPrimero); // r: "Vargas"


// METODO .unshift()
let colors = [ "Blue", "White", "Red", "Green" ]
colors.unshift( "Violet", "Yellow" ); 
console.log(colors); // r: [ "Violet", "Yellow", "Blue", "White", "Red", "Green" ] 


// METODO .indexOf() de indice 0 al final del array -->
let colors2 = [ "Blue", "White", "Red", "Green" ]
colors2.indexOf( "Green" ); 
console.log(colors2.indexOf( "Green" ));  // r: 3

// METODO .indexOf() objeto no presente en array
let frutas = [ "Pera", "Mango", "Cereza", "Banano" ]
frutas.indexOf( "Azul" ); 
console.log(frutas.indexOf( "Azul" ));  // r: -1


// METODO .lasIndexOf() del indice final del array al 0 el ultimo en posicion <--
let frutas2 = [ "Peras", "Mangos", "Cerezas", "Bananos", "Mangos"]
frutas2.lastIndexOf( "Mangos" ); 
console.log(frutas2.lastIndexOf( "Mangos" ));  // r: 4


// METODO .join()
let diasEntreSemana = [ "lunes", "martes", "miercoles", "jueves", "viernes"] ;
diasEntreSemana.join();
console.log(diasEntreSemana.join()); // r: "lunes,martes,miercoles,jueves,viernes"


// METODO .join() separados por cualquier caracter como parametro
let diasEntreSemana2 = [ "lunes", "martes", "miercoles", "jueves", "viernes"] ;
diasEntreSemana2.join("ª");
console.log(diasEntreSemana2.join("ª")); // r: "lunesªmartesªmiercolesªjuevesªviernes"



// METODO .indexOf() y condicional IF

let notas = [4,5,6,2,7,4,9,7,5];

let algunaPosicion = notas.indexOf(3);
if(algunaPosicion = -1) {  
    console.log("No encontrado :(");
};


// METODO .includes() 
let verduras = [ 'Zanahoria', 'Tomate', 'Pepino' ];

verduras.includes('Pepino');
verduras.includes('Brocoli');

console.log(verduras.includes('Pepino'));
console.log(verduras.includes('Brocoli'));




