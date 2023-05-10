export class Educacion {
    public id?: number;
    public titulo: string;
    public institucion: string;
    public inicio: string;
    public fin: string;

    constructor(titulo: string, institucion: string, inicio: string, fin:string){
        this.titulo = titulo;
        this.institucion = institucion;
        this.inicio = inicio;
        this.fin= fin;
    }
}