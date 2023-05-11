export class Skills {
    public id?: number;
    public hard: string;
    public soft: string;


    constructor(hard: string, soft: string) {
        this.hard = hard;
        this.soft = soft;
    }
}