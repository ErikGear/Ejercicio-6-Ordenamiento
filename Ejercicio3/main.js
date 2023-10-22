class Alumno {
  static id = 0;

  #nombre;
  #apellidos;
  #calificaciones;
  #idAlumno;
  #promedio;

  constructor(nombre, apellidos) {
    this.#nombre = nombre;
    this.#apellidos = apellidos;

    this.#calificaciones = new Array(5);
    this.#idAlumno = ++Alumno.id;
  }

  get getNombre() {
    return this.#nombre;
  }
  set setNombre(nombre) {
    this.#nombre = nombre;
  }

  get getApellidos() {
    return this.#apellidos;
  }
  set setApellidos(apellidos) {
    this.#apellidos = apellidos;
  }

  get geIdAlumno() {
    return this.#idAlumno;
  }

  get getPromedio(){
    return this.#promedio;
  }

  registrarCalificaciones(calificacion) {

    if (calificacion > 0) {
        this.#calificaciones.push(calificacion);
    } else {
        console.log(`La calificación ${calificacion}, es invalida`);
    }

  }

  promedioCalificaciones() {
    let sumaCalificaciones = 0;

    if (this.#calificaciones.length === 0) {
        console.log(`No hay registro de calificaciones`);
        this.#promedio = sumaCalificaciones;
    } else {

        for (const calificacion of this.#calificaciones) {
            sumaCalificaciones += calificacion;
        }
      
        this.#promedio = sumaCalificaciones / this.#calificaciones.length;
      
        this.#promedio;
    }
   
  }

  toString() {
    return `
        Datos del Alumno:\n
        Id: ${this.#idAlumno} - Nombre: ${this.#nombre} Apellidos: ${this.#apellidos}\n
        `;
  }
}

class Salon {
  static ordenamientoBurbuja(collection) {
    for (let i = 0; i < collection.length - 1; i++) {
      for (let j = 0; j < collection.length - 1; j++) {
        let tmp = undefined;

        if (collection[j].getPromedio > collection[j + 1].getPromedio) {
          tmp = collection[j];
          collection[j] = collection[j + 1];
          collection[j + 1] = tmp;
        }
      }
    }
  }
}
