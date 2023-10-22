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
        console.log("calificacion: "+calificacion);
        sumaCalificaciones += calificacion;
      }
      console.log("suma: "+ sumaCalificaciones);

      this.#promedio = (sumaCalificaciones / this.#calificaciones.length);

      console.log("promedio: "+this.#promedio);
    }
  }

  toString() {
    return `
        Datos del Alumno:\n
        Id: ${this.#idAlumno} - Nombre: ${this.#nombre} Apellidos: ${
      this.#apellidos
    }\n
        `;
  }
}

class Salon {
  #alumnos;

  constructor() {
    this.#alumnos = [];
  }

  agregarAlumno(alumno) {
    this.#alumnos.push(alumno);
  }

  promedioMayor() {
    for (let i = 0; i < this.#alumnos.length - 1; i++) {
      for (let j = 0; j < this.#alumnos.length - 1; j++) {
        let tmp = undefined;

        if (this.#alumnos[j].getPromedio > this.#alumnos[j + 1].getPromedio) {
          tmp = this.#alumnos[j];
          this.#alumnos[j] = this.#alumnos[j + 1];
          this.#alumnos[j + 1] = tmp;
        }
      }
    }

    //console.log(this.#alumnos);

    //return this.#alumnos[this.#alumnos.length - 1];
  }

  listarAlumnos() {
    for (const alumno of this.#alumnos) {
      console.log(alumno.toString());
    }
  }
}

const erik = new Alumno("Erik", "Galindo");
erik.registrarCalificaciones(10);
erik.registrarCalificaciones(10);
erik.registrarCalificaciones(10);
erik.registrarCalificaciones(10);
erik.registrarCalificaciones(10);
erik.promedioCalificaciones();

const ismael = new Alumno("Ismael", "Garcia");
ismael.registrarCalificaciones(9.6);
ismael.registrarCalificaciones(6.8);
ismael.registrarCalificaciones(7.2);
ismael.registrarCalificaciones(8.2);
ismael.registrarCalificaciones(7.2);
ismael.promedioCalificaciones();

const julio = new Alumno("Julio", "Camacho");
julio.registrarCalificaciones(9.6);
julio.registrarCalificaciones(8.8);
julio.registrarCalificaciones(7.2);
julio.registrarCalificaciones(7.2);
julio.registrarCalificaciones(7.2);
julio.promedioCalificaciones();

const mario = new Alumno("Mario", " Bros");
mario.registrarCalificaciones(6.6);
mario.registrarCalificaciones(7.8);
mario.registrarCalificaciones(7.2);
mario.registrarCalificaciones(5.2);
mario.registrarCalificaciones(6.2);
mario.promedioCalificaciones();

const diego = new Alumno("Diego", "Cli");
diego.registrarCalificaciones(8.6);
diego.registrarCalificaciones(7.8);
diego.registrarCalificaciones(8.2);
diego.registrarCalificaciones(8.2);
diego.registrarCalificaciones(8.2);
diego.promedioCalificaciones();

const salonA = new Salon();
salonA.agregarAlumno(erik);
salonA.agregarAlumno(ismael);
salonA.agregarAlumno(julio);
salonA.agregarAlumno(mario);
salonA.agregarAlumno(diego);

salonA.promedioMayor();
console.log("\n");
salonA.listarAlumnos();

//console.log(`El promedio mayor es: ${salonA.promedioMayor().toString()}`);
