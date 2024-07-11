export default class Cl_Mayor{
    constructor(){
        this.contPersonas = 0;
        this.contPerosnasMayor = 0;
    }
    procesarPersona(pe){
        this.contPersonas++;
        if(pe._edad >= 18){
            this.contPerosnasMayor++;
        }
    }
devolverContPersonas(){
    return this.contPersonas
}
devolverContPersonasMayores(){
    return this.contPerosnasMayor;
}
calcularPorcentaje(){
    return this.contPerosnasMayor*100/this.contPersonas;
}
}