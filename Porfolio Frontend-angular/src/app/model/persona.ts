export class Persona {
    public id?: number;
    public nombre: string;
    public apellido: string;
    public acercaDe: string;

    constructor(nombre: string, apellido: string, acercaDe: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.acercaDe = acercaDe;
    }
}
