import { Component, NgModule } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/Service/movie.service';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private movieService: MovieService) {}
  movies: Movie[] = [];
  movieServiceSubscription!: Subscription;
  ngOnInit() {
    console.log(this.movies.length);

    this.movieServiceSubscription = this.movieService
      .getListMovie()
      .subscribe(({ results }) => {
        this.movies = results;
      });
  }
  ngDestroy() {
    this.movieServiceSubscription.unsubscribe();
  }
  slideConfig = { slidesToShow: 5, slidesToScroll: 5 };
}
