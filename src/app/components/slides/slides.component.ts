import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
})
export class SlidesComponent {
  @Input() movie!: Movie;
}
