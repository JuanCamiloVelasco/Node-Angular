export class Comida{
    id!:string;
    nombre!:string;
    precio!:number;
    tags?: string[];
    favorito!: boolean;
    estrellas!: number;
    urlImagen!: string;
    origen!: string[];
    tiempoComida!:string;
}