import { Schema, model } from "mongoose";

export interface Comida{
    id:string;
    nombre:string;
    precio:number;
    tags?: string[];
    favorito: boolean;
    estrellas: number;
    urlImagen: string;
    origen: string[];
    tiempoComida:string;
}

export const ComidaSchema = new Schema<Comida>({
    nombre: {type: String, required: true},
    precio: {type: Number, required: true},
    tags: {type: [String]},
    favorito: {type: Boolean, default: false},
    estrellas: {type: Number, required: true},
    urlImagen: {type: String, required: true},
    origen: {type: [String], required: true},
    tiempoComida: {type: String, required: true},
}, {
    toJSON:{
        virtuals: true
    }, 
    toObject: {
        virtuals: true
    },
    timestamps: true
});

export const ComidaModel = model<Comida>('comida', ComidaSchema);