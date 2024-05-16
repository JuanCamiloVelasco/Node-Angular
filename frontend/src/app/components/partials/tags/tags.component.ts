import { Component } from '@angular/core';
import { Tag } from '../../../shared/models/Tag';
import { ComidaService } from '../../../services/comida.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {

  tags?:Tag[];
  constructor(comidaService:ComidaService) {
    comidaService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
  }
}
