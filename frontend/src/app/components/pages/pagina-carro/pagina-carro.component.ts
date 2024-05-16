import { Component } from '@angular/core';
import { Carro } from '../../../shared/models/Carro';
import { CarroService } from '../../../services/carro.service';
import { ItemCarro } from '../../../shared/models/ItenCarro';
import { TitleComponent } from "../../partials/title/title.component";
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NoEncontradoComponent } from "../../partials/no-encontrado/no-encontrado.component";

@Component({
    selector: 'app-pagina-carro',
    standalone: true,
    templateUrl: './pagina-carro.component.html',
    styleUrl: './pagina-carro.component.css',
    imports: [TitleComponent, NgFor, NgIf, RouterLink, CurrencyPipe, NoEncontradoComponent]
})
export class PaginaCarroComponent {
  carro!: Carro;
  constructor(private carroService:CarroService) {
    this.carroService.getCarroObservable().subscribe((carro) => {
      this.carro = carro;
    })
  }

  eliminarDelCarro(itemCarro:ItemCarro){
    this.carroService.eliminarDelCarro(itemCarro.comida.id);
  }

  cambiarCantidad(itemCarro:ItemCarro, cantidadInString:string){
    const canidad = parseInt(cantidadInString);
    this.carroService.cambiarCantidad(itemCarro.comida.id, canidad);
  }
}
