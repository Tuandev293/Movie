import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/Service/movie.service';
import { Cast } from 'src/app/models/Cast';
import { MovieDetails } from 'src/app/models/Movie';
import { ReviewMovie } from 'src/app/models/Reviews';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent {
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}
  movieServiceSubscription!: Subscription;
  movie!: MovieDetails;
  cast!: Cast[];
  review!: ReviewMovie;
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.movieServiceSubscription = this.movieService
      .getMovieDetails(id)
      .subscribe((movie) => {
        this.movie = movie;
        console.log(this.movie);
      });
    this.movieServiceSubscription = this.movieService
      .getMovieCast(id)
      .subscribe(({ cast }) => {
        this.cast = cast.splice(0, 12);
        console.log(this.cast);
      });

    this.movieServiceSubscription = this.movieService
      .getReviewMovie(id)
      .subscribe((review) => {
        this.review = review;
        console.log(this.review);
      });
  }
  slidesBanner = {
    slidesToShow: 1,
    slideToScroll: 1,
    prevArrow: false,
    nextArrow: false,
  };
}
