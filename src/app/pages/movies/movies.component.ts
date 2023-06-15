import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/Service/movie.service';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
})
export class MoviesComponent {
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
  slidesBanner = {
    slidesToShow: 1,
    slideToScroll: 1,
    prevArrow: false,
    nextArrow: false,
  };
}
