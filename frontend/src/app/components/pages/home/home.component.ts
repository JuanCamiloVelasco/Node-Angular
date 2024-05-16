import { Component } from '@angular/core';
import { Comida } from '../../../shared/models/Comida';
import { ComidaService } from '../../../services/comida.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CurrencyPipe, NgFor } from '@angular/common';
import { StarRatingComponent } from "../../partials/star-rating/star-rating.component";
import { SearchComponent } from "../../partials/search/search.component";
import { TagsComponent } from "../../partials/tags/tags.component";
import { NoEncontradoComponent } from "../../partials/no-encontrado/no-encontrado.component";
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterModule, NgFor, StarRatingComponent, CurrencyPipe, SearchComponent, TagsComponent, NoEncontradoComponent]
})
export class HomeComponent{
  comidas:Comida[] = [];
  constructor(private comidaService:ComidaService, activatedRoute:ActivatedRoute) {
    let comidasObervable:Observable<Comida[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        comidasObervable = this.comidaService.getAllComidasBySearchTerm(params.searchTerm);
      else if(params.tag)
        comidasObervable = this.comidaService.getAllComidasByTag(params.tag);
      else
        comidasObervable = comidaService.getAll();

        comidasObervable.subscribe((comidasServer) => {
          this.comidas = comidasServer;
        })
    })
  }
}
