
let calcularPromedio = function () {
    let suma = 0;

    for (let i = 0; i < this.notas.lenght; i++) {
        suma = suma + this.notas[i];
    }
    return suma / this.notas.lenght;
};

let decirEstado = function ()  {
    let promedio = this.promedio();
    return promedio >= 7 ? "Aprobaste" : "Desaprobaste"
};

let alumnos = [

    {
        nombre: "Pepito",
        apellido: "Perez",
        numLegajo: 123456,
        notas: [ 5, 4, 9, 0],
        promedio: calcularPromedio,
        estado: decirEstado,
    },

    {
        nombre: "Juancito",
        apellido: "Lopez",
        numLegajo: 123457,
        notas: [3, 2, 1, 9],
        promedio: calcularPromedio,
        estado: decirEstado,
    },

    {
        nombre: "Maria",
        apellido: "Gonzales",
        numLegajo: 123457,
        notas: [7, 6, 10, 6],
        promedio: calcularPromedio,
        estado: decirEstado,
    },

];

for (let i = 0; i < alumnos.lenght; i++) {
    console.log(alumnos[i].promedio());
    console.log(alumnos[i].estado());
};


let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso: 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso: 'iOS',
    }
  ]
  
  estudiantes.unshift(
  
    {
      nombre: 'Mariana',
      promedio: 9,
      curso : 'Full Stack'
    },
    {
      nombre: 'Francisco',
      promedio: 2,
      curso : 'Android'
    }
  );

  console.log(estudiantes);