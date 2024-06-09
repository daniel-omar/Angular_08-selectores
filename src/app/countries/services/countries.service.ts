import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genero } from '../interfaces/genero.interface';
import { ResponseData } from '../interfaces/response-data.interface';
import { Observable, map } from 'rxjs';
import { Anime } from '../interfaces/anime.interface';
import { EpisodioAnime } from '../interfaces/episodio-anime.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiAnime: string = "https://api.jikan.moe/v4"

  constructor(
    private _httpClient: HttpClient
  ) { }

  getGeneros(): Observable<Genero[]> {
    const endpoint = `${this.apiAnime}/genres/anime`;
    return this._httpClient.get<ResponseData<Genero[]>>(endpoint)
      .pipe(
        map(x => x.data)
      );
  }

  getAnimesByGeneros(ids_generos: string): Observable<Anime[]> {
    const endpoint = `${this.apiAnime}/anime?genres=${ids_generos}`;
    return this._httpClient.get<ResponseData<Anime[]>>(endpoint)
      .pipe(
        map(x => x.data)
      );
  }

  getEpisodesByAnime(id_anime: string): Observable<EpisodioAnime[]> {
    const endpoint = `${this.apiAnime}/anime/${id_anime}/episodes`;
    return this._httpClient.get<ResponseData<EpisodioAnime[]>>(endpoint)
      .pipe(
        map(x => x.data)
      );
  }
}
