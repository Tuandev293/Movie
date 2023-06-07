import { Component, Input } from '@angular/core';
import { ReviewMovie } from 'src/app/models/Reviews';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
})
export class ReviewsComponent {
  @Input() review!: ReviewMovie;
}
