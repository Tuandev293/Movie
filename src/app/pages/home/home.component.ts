import { Component, NgModule } from '@angular/core';
import { MovieService } from 'src/app/Service/movie.service';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private movieService: MovieService) {}
  movies!: Movie[];
  ngOnInit() {
    this.movieService.getListMovie().subscribe(({ results }) => {
      this.movies = results;
    });
  }
  // slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
}
