import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieDetails } from '../models/Movie';
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
}
