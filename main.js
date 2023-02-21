class Alumno {
    constructor(nombre, apellido, email,clases_reservadas) {
        this.nombre = nombre; 
        this.apellido = apellido;
        this.email = email;
        this.clases_reservadas=clases_reservadas;
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
alumno0.clases_reservadas=[clase00,clase0]
alumno00.clases_reservadas=[clase00]
alumno000.clases_reservadas=[clase00]


let array_alumnos_estudio= [alumno0,alumno00,alumno000]
let array_clases=[clase0,clase00]

function actualizar_alumnos_estudio(alumno){
    if (array_alumnos_estudio.some(alumno=>alumno.email==email)){
        return array_alumnos_estudio;
    }
    array_alumnos_estudio.push(alumno1);
    return array_alumnos_estudio;
}

function actualizar_clase(una_clase){
    let clases_del_dia=array_clases.filter(clase=>clase.dia==una_clase.dia)
    // if (clases_del_dia==[]){
    //     array_clases.push(una_clase);
    //     return array_clases;
    // }
    if (clases_del_dia.some(clase=>clase.horario==una_clase.horario)){
        return array_clases;
    }
        array_clases.push(una_clase);
        return array_clases;
}

function hacer_una_reserva() {
    let dia = prompt("Ingrese el día de la semana para el que quiere reservar su clase (lunes, martes, etc):").toLowerCase();
    let horario = prompt("Ahora ingrese el horario: (11,12,13,etc")

    const clase1 = new Clase(dia, horario,[]);

    actualizar_clase(clase1)
    let clases_del_dia_de_la_reserva=array_clases.filter(clase=>clase.dia==clase1.dia)
    let clase_a_reservar=clases_del_dia_de_la_reserva.find(clase=>clase.horario==clase1.horario)
    
    if (clase_a_reservar.alumnos.length<3){
        clase1.alumnos=clase_a_reservar.alumnos;
        clase1.alumnos.push(alumno1);
        let alumno=array_alumnos_estudio.find(alumno=>alumno.email==email)
        alumno.clases_reservadas.push(clase1)
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
    alumno1.clases_reservadas.pop();
    alumno_molesto=array_alumnos_estudio.find(alumno=>alumno.email==email)
    alumno_molesto.clases_reservadas.pop()
    return clase;
}

function menu() {
    let opcion = prompt("Para cancelar su última reserva, ingrese C. Para finalizar, ingrese S:");
    return opcion;
}

function alumnos_en_la_clase(dia,horario){
    let clases_del_dia_de_la_consulta=array_clases.filter(clase=>clase.dia==dia);  
    if (!(clases_del_dia_de_la_consulta.some(clase=>clase.horario==horario))){
        return ("no hay alumnos en la clase!");
        }
    let clase_consultada=clases_del_dia_de_la_consulta.find(clase=>clase.horario==horario);
    if (clase_consultada.alumnos.length>0){
        return clase_consultada.alumnos;
        }
        return ("no hay alumnos en la clase!");
        }

function consulta_clases_alumno(alumno){
    if (alumno.clases_reservadas.length==0){
    return ("ninguna.")}
    return alumno.clases_reservadas;
}

let nombre = prompt("Para reservar una clase, por favor ingrese su nombre:")
let apellido = prompt("Ahora ingrese su apellido:")
let email = prompt("Finalmente, ingrese su e-mail:")

const alumno1 = new Alumno(nombre, apellido, email,[]);

actualizar_alumnos_estudio (alumno1)

let clase1=hacer_una_reserva()

let opcion = menu();

switch(opcion.toLowerCase()) {
    case "c":
        cancelar_reserva(clase1)
        alert("Su reserva se ha cancelado con éxito.")
        alert("Gracias por utilizar nuestro sistema de reservas!");
        break;
    case "s": 
        alert("Gracias por utilizar nuestro sistema de reservas!");
        break;
    default:
        alert("La opción es incorrecta!");
        alert("Gracias por utilizar nuestro sistema de reservas!");
        break;
}
console.log("Alumnos del Estudio:")
console.log(array_alumnos_estudio)
console.log("Clases de la semana:")
console.log(array_clases)

array_alumnos_estudio.forEach(alumno => console.log("Las clases reservadas por", alumno.nombre, alumno.apellido, "son:", consulta_clases_alumno(alumno)))
array_clases.forEach(clase => console.log("Alumnos en la clase del", clase.dia, "a las", clase.horario, ":", alumnos_en_la_clase(clase.dia,clase.horario)))