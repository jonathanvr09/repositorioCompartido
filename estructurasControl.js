const prompt = require("prompt-sync")({ sigint: true });


// EJEMPLO CON SWITCH

let obtenerAnimal = (animal) =>{

    switch(animal){

        case "gato":
            console.log("Soy un gato");
            break;
        case "lobo":
            console.log("Soy un lobo");
            break;
        case "perro":
            console.log("Soy un perro");
            break; 
        default:
            console.log("Perdon pero no conozco ese animal")   
    }

};

obtenerAnimal("elefante")
obtenerAnimal("tigre")
obtenerAnimal("lobo")


// EJERCITACION

let puedeSubir = ( altura, acompañada )=>{

    if( altura >= 1.40 && altura < 2 ){
        return true
    } else if(altura < 1.40 && altura >= 1.20 && acompañada ){
        return true
    }else{
        return false
    }

}

console.log(puedeSubir(1.50, true))


// CONVERTIR A NUMBER

let numberOstring = "5"
console.log(typeof(numberOstring))
console.log(typeof(+numberOstring))

