import { Component } from '@angular/core';
import { Comida } from '../../../shared/models/Comida';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ComidaService } from '../../../services/comida.service';
import { StarRatingComponent } from "../../partials/star-rating/star-rating.component";
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { CarroService } from '../../../services/carro.service';
import { NoEncontradoComponent } from "../../partials/no-encontrado/no-encontrado.component";

@Component({
    selector: 'app-pagina-comida',
    standalone: true,
    templateUrl: './pagina-comida.component.html',
    styleUrl: './pagina-comida.component.css',
    imports: [StarRatingComponent, NgFor, NgIf, RouterLink, CurrencyPipe, NoEncontradoComponent]
})
export class PaginaComidaComponent {
  comida!: Comida;
  constructor(activatedRoute:ActivatedRoute, comidaService:ComidaService, private carroService:CarroService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
        comidaService.getComidaById(params.id).subscribe(comidaServer => {
          this.comida = comidaServer
        });
    })
  }

  agregarAlCarro(){
    this.carroService.agregarAlCarro(this.comida);
    this.router.navigateByUrl('/pagina-carro');
  }
}
