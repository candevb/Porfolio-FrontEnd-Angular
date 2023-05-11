export class Experiencia {
    public id?: number;
    public empresa: string;
    public posicion: string;
    public descripcion: string;
    public inicio: string;
    public fin: string;

    constructor(empresa: string, posicion: string, descripcion: string, inicio:string, fin:string){
        this.empresa = empresa;
        this.posicion = posicion;
        this.descripcion = descripcion;
        this.inicio = inicio;
        this.fin= fin;
    }
}