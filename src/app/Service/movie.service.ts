import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieDetails } from '../models/Movie';
import { CastMovie } from '../models/Cast';
import { ReviewMovie } from '../models/Reviews';
type GetListMovieResponse = {
  results: Movie[];
};

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  getListMovie(): Observable<GetListMovieResponse> {
    return this.http.get<GetListMovieResponse>('/movie/now_playing');
  }
  getMovieDetails(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`/movie/${id}`);
  }
  getMovieCast(id: string): Observable<CastMovie> {
    return this.http.get<CastMovie>(`/movie/${id}/casts`);
  }
  getReviewMovie(id: string): Observable<ReviewMovie> {
    return this.http.get<ReviewMovie>(`/movie/${id}/reviews`);
  }
}
