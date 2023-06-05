import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/Service/movie.service';
import { MovieDetails } from 'src/app/models/Movie';
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
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.movieServiceSubscription = this.movieService
      .getMovieDetails(id)
      .subscribe((movie) => {
        this.movie = movie;
        console.log(this.movie);
      });
  }
  slidesBanner = {
    slidesToShow: 1,
    slideToScroll: 1,
    prevArrow: false,
    nextArrow: false,
  };
}
