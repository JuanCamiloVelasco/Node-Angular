import { Injectable } from '@angular/core';
import { Carro } from '../shared/models/Carro';
import { BehaviorSubject, Observable } from 'rxjs';
import { Comida } from '../shared/models/Comida';
import { ItemCarro } from '../shared/models/ItenCarro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  private carro:Carro = this.getCarroFromLocalStorage();
  private carroSubject: BehaviorSubject<Carro> = new BehaviorSubject(this.carro);
  constructor() { }

  agregarAlCarro(comida:Comida):void{
    let itemCarro = this.carro.items.find(item => item.comida.id === comida.id);
    if(itemCarro)
      return;
    this.carro.items.push(new ItemCarro(comida));
    this.setCarroToLocalStorage();
  }

  eliminarDelCarro(comidaId: string):void {
    this.carro.items = this.carro.items.filter(item=> item.comida.id != comidaId);
    this.setCarroToLocalStorage();
  }

  cambiarCantidad(comidaId: string, cantidad: number){
    let itemCarro = this.carro.items.find(item => item.comida.id === comidaId);
    if(!itemCarro) return;

    itemCarro.cantidad = cantidad;
    itemCarro.precio = cantidad * itemCarro.comida.precio;
    this.setCarroToLocalStorage();
  }

  limpiarCarro(){
    this.carro = new Carro();
    this.setCarroToLocalStorage();
  }

  getCarroObservable():Observable<Carro>{
    return this.carroSubject.asObservable();
  }

  getCarro():Carro{
    return this.carroSubject.value;
  }

  private setCarroToLocalStorage():void{
    this.carro.precioTotal = this.carro.items.reduce((prevSum, currentIten) => prevSum + currentIten.precio, 0);
    this.carro.cantidadTotal = this.carro.items.reduce((prevSum, currentItem) => prevSum + currentItem.cantidad, 0);

    const carroJson = JSON.stringify(this.carro);
    localStorage.setItem('Carro', carroJson);
    this.carroSubject.next(this.carro);
  }

  private getCarroFromLocalStorage():Carro{
    const carroJson = localStorage.getItem('Carro');
    return carroJson? JSON.parse(carroJson): new Carro();
  }
}
