import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/Movie';
type GetListMovieRequest = {
  results: Movie[];
};
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  getListMovie(): Observable<GetListMovieRequest> {
    return this.http.get<GetListMovieRequest>('/movie/now_playing');
  }
}
