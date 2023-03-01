const prompt = require("prompt-sync")({ sigint: true });

// Edad

// let edad = 20
// if(edad < 0 ){
//     console.log("error, edad invalida. Por favor ingrese una numero valido")
// }else if(edad === 21){
//     console.log("Bienvenido, felicitaciones por ser mayor de edad")
// }else if(edad %2 !== 0){
//     console.log("Sabias que tu edad es impar?")
// };

let edad = 20

let resultado = edad < 0 ? "error, edad invalida. Por favor ingrese una numero valido": 
                edad === 21 ? "Bienvenido, felicitaciones por ser mayor de edad" : 
                edad %2 !== 0 ? "Sabias que tu edad es impar?": "cualquierCosa"

console.log(resultado)


// totalAPagar

// let totalAPagar = (vehiculo, litrosConsumidos) =>{

let vehiculo = "moto"
let litrosConsumidos = ()=>{

    let base = vehiculo === "coche" ? 86:
    vehiculo === "moto" ? 70:
    vehiculo === "autobus" ? 55: 0

    let adicional = litrosConsumidos > 0 || litrosConsumidos <= 25 ? 50:
         litrosConsumidos > 25 ? 25: 0

    let totalAPagar = base + adicional;
}

console.log(totalAPagar);
    
   



               

    




 


