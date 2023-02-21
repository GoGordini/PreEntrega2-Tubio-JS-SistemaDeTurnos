class Alumno {
    constructor(nombre, apellido, email) {
        this.nombre = nombre; 
        this.apellido = apellido;
        this.email = email;
    }
}

class Clase {
    constructor(dia, horario,alumnos) {
        this.dia = dia; 
        this.horario = horario;
        this.alumnos=alumnos;
    }
}

const alumno0 = new Alumno("Eleonora", "Tubio", "eleonora.tubio@gmail.com");
const alumno00 = new Alumno("Juan", "Pérez", "juan.perez@gmail.com")
const alumno000 = new Alumno("María", "Gómez", "maria.gomez@gmail.com")
const clase0 = new Clase("lunes", 21,[alumno0]);
const clase00= new Clase("lunes", 20,[alumno0,alumno00,alumno000])

let array_alumnos_estudio= [alumno0,alumno00,alumno000]
let array_clases=[clase0,clase00]

function actualizar_alumnos_estudio(alumno){
    if (array_alumnos_estudio.find(alumno=>alumno.email==email)==undefined){
        array_alumnos_estudio.push(alumno1)
    }
    return array_alumnos_estudio
}

function actualizar_clase(una_clase){
    if (array_clases.find((clase=>clase.dia==una_clase.dia)&&(clase=>clase.horario==una_clase.horario))==undefined){
        array_clases.push(una_clase);
        return array_clases
    }
    return array_clases
}

function hacer_una_reserva() {
    let dia = prompt("Ingrese el día de la semana para el que quiere reservar su clase (lunes, martes, etc):").toLowerCase();
    let horario = prompt("Ahora ingrese el horario: (11,12,13,etc")

    const clase1 = new Clase(dia, horario,[]);

    actualizar_clase(clase1)
    let clase_a_reservar=array_clases.find((clase=>clase.dia==clase1.dia)&&(clase=>clase.horario==clase1.horario))
    if (clase_a_reservar.alumnos.length<3){
        clase1.alumnos=clase_a_reservar.alumnos;
        clase1.alumnos.push(alumno1);
        alert("Su reserva se ha realizado con éxito!");
        return clase1;
    }
    
    else{
    alert("Ese horario no se encuentra disponible. Por favor, intente nuevamente.")
    hacer_una_reserva()
    }
}

function cancelar_reserva(clase){
    clase.alumnos.pop();
    return clase;
}

function menu() {
    let opcion = prompt("Para cancelar su última reserva, ingrese C. Para finalizar, ingrese S:");
    return opcion;
}

let nombre = prompt("Para reservar una clase, por favor ingrese su nombre:")
let apellido = prompt("Ahora ingrese su apellido:")
let email = prompt("Finalmente, ingrese su e-mail:")

const alumno1 = new Alumno(nombre, apellido, email);

actualizar_alumnos_estudio (alumno1)

console.log(array_alumnos_estudio)

console.log(array_clases)

let clase1=hacer_una_reserva()

let opcion = menu();

switch(opcion) {
    case "C":
        cancelar_reserva(clase1)
        alert("Su reserva se ha cancelado con éxito.")
        alert("Gracias por utilizar nuestro sistema de reservas!");
        break;
    case "S": 
        alert("Gracias por utilizar nuestro sistema de reservas!");
        break;
    default:
        alert("La opción es incorrecta!");
        alert("Gracias por utilizar nuestro sistema de reservas!");
        break;
}

console.log(array_clases)