


const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ];

/* Desarrollar una función que ordene internamente de forma ascendente según él saldo de cada cuenta, la misma deberá retornar él array ordenado .*/

let arregloNuevo = [];

for ( let x = 0; x < arrayCuentas.length; x++ ){
    arregloNuevo.push(arrayCuentas[x].edadTitular);
}
   

let ordenar = ( arr ) => {
    let aux = 0;
    for ( let i = 0; i < arr. length; i++ ) {
        for ( let j = 0; j < arr. length - 1; j++ ) {
            if ( arr[j]> arr[j + 1]){

                aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1]= aux;

            }
        }
    }
    return arr;

}

console.log("Arreglo inicial")
ordenar(arrayCuentas);
console.log(arregloNuevo);

console.log("Arreglo organizado")
ordenar(arregloNuevo);
console.log(arregloNuevo);


/* Desarrollar una función que ordene internamente de forma ascendente según la edad del titular de cada cuenta, la misma deberá retornar él array ordenado , e. */

