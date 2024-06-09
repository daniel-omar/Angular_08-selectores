import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Genero } from '../../interfaces/genero.interface';
import { Anime } from '../../interfaces/anime.interface';
import { filter, tap } from 'rxjs';
import { EpisodioAnime } from '../../interfaces/episodio-anime.interface';

@Component({
  selector: 'countries-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss']
})
export class SelectorPageComponent implements OnInit {

  public myForm: FormGroup = this._formBuilder.group({});
  public generos: Genero[] = [];
  public animes: Anime[] = [];
  public episodiosAnime: EpisodioAnime[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _countriesService: CountriesService
  ) {
    this.initForm();
    this.getGeneros();
  }

  ngOnInit(): void {
    this.onGeneroChanged();
    this.onAnimeChanged();
  }




  initForm() {
    this.myForm = this._formBuilder.group({
      generos: ['0', Validators.required],
      animes: ['0', Validators.required],
      episodios: ['0', Validators.required]
    });
  }

  getGeneros() {
    this._countriesService.getGeneros().subscribe(
      generos => {
        this.generos = generos
      }
    )
  }

  onGeneroChanged() {
    this.myForm.get("generos")!.valueChanges
      .pipe(
        tap(() => {
          this.myForm.get("animes")!.setValue("0")
        }),
        tap(() => {
          this.animes = []
        }),
        filter((value: string) => ["", "0"].indexOf(value) < 0)
      )
      .subscribe(value => {
        let generos = []
        generos.push(value)
        this.getAnimesByGenero(generos);
      })
  }

  getAnimesByGenero(ids_generos: string[]) {
    this._countriesService.getAnimesByGeneros(ids_generos.join(',')).subscribe(
      animes => {
        this.animes = animes
      }
    )
  }

  onAnimeChanged() {
    this.myForm.get("animes")!.valueChanges
      .pipe(
        tap(() => {
          this.myForm.get("episodios")!.setValue("0")
        }),
        tap(() => {
          this.episodiosAnime = []
        }),
        filter((value: string) => ["", "0"].indexOf(value) < 0)
      )
      .subscribe(value => {
        this.getEpisodesByAnime(value);
      })
  }

  getEpisodesByAnime(id_anime: string) {
    this._countriesService.getEpisodesByAnime(id_anime).subscribe(
      episodios => {
        this.episodiosAnime = episodios
      }
    )
  }
}
