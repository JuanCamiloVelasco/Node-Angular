import { NgFor, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'star-rating',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  @Input()
  estrellas!: number;

  @Input()
  size: number = 1;

  get styles() {
    return {
      'width.rem': this.size,
      'height.rem': this.size,
      'marginRight.rem': this.size / 6,
    }
  }

  getStarImage(current: number): string{
    const previousHalf = current - 0.5;
    const imageName =
    this.estrellas >= current
    ? 'star-full'
    : this.estrellas >= previousHalf
    ? 'star-half'
    : 'star-empty';
    return `/assets/stars/${imageName}.svg`;
  }

}
