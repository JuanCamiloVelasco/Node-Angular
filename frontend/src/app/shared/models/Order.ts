import { LatLng } from "leaflet";
import { ItemCarro } from "./ItenCarro";

export class Order {
    id!: number;
    items!: ItemCarro[];
    totalPrice!: number;
    nombre!:string;
    direccion!: string;
    direccionLatLng?:LatLng;
    paymentId!:string;
    createdAt!:string;
    status!: string;
}