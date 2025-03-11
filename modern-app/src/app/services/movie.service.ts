import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ApiResult, MovieResults } from './interfaces';

const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})

export class MovieService {

constructor(private http: HttpClient) { }

  getTopRatedMovies(page = 1):Observable<ApiResult> {
    return this.http
    .get<ApiResult>(`${BASE_URL}/movie/popular?page=${page}&api_key=${API_KEY}`)
    // .pipe(delay(5000));
  }

  getMovieDetails(id:String):Observable<MovieResults> {
    return this.http.get<MovieResults>(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  }

}
