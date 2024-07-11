import Cl_Persona from "./Cl_Persona.js";
import Cl_Mayor from "./Cl_Mayor.js";

let persona1 = new Cl_Persona("luis", 15)
let persona2 = new Cl_Persona("Ana", 19)
let persona3 = new Cl_Persona("Jose", 21)
let persona4 = new Cl_Persona("Carmen", 17)
let persona5 = new Cl_Persona("Rosa", 18)
let persona6 = new Cl_Persona("Jose", 22)
let persona7 = new Cl_Persona("Maria", 17)
let persona8 = new Cl_Persona("Rafael", 23)
let persona9 = new Cl_Persona("liz", 15)
let persona10 = new Cl_Persona("luz", 19)
let persona11 = new Cl_Persona("Marcos", 20)
let persona12 = new Cl_Persona("Leo", 16)

let Mayor = new Cl_Mayor()

Mayor.procesarPersona(persona1)
Mayor.procesarPersona(persona2)
Mayor.procesarPersona(persona3)
Mayor.procesarPersona(persona4)
Mayor.procesarPersona(persona5)
Mayor.procesarPersona(persona6)
Mayor.procesarPersona(persona7)
Mayor.procesarPersona(persona8)
Mayor.procesarPersona(persona9)
Mayor.procesarPersona(persona10)
Mayor.procesarPersona(persona11)
Mayor.procesarPersona(persona12)

let salida = document.getElementById("salida")

salida.innerHTML = "Cantidad de personas: "+Mayor.devolverContPersonas();
salida.innerHTML += "<br> Cantidad de personas mayor de edad: "+ Mayor.devolverContPersonasMayores();
salida.innerHTML += "<br> Porcentaje de personas mayores de edad: "+Mayor.calcularPorcentaje();