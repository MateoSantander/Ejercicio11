export class Videojuego{

    private _id: number;
    
    private _titulo: string;
    
    private _compania: string;
    
    private _rating: number;
    
    private static asignaID: number = 0;

    constructor(nombre:string, compania:string, rating:number){
        this._titulo = nombre;
        this._compania = compania;
        this._rating = rating;
        this._id = this.asignarID;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }

    public get compania(): string {
        return this._compania;
    }
    public set compania(value: string) {
        this._compania = value;
    }

    public get rating(): number {
        return this._rating;
    }
    public set rating(value: number) {
        this._rating = value;
    }

    public get asignarID(){
        return Videojuego.asignaID++;
    }
}