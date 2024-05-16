import { Comida } from "./Comida";

export class ItemCarro{
    constructor(public comida:Comida) {
        
    }
    cantidad:number = 1;
    precio: number = this.comida.precio;
}