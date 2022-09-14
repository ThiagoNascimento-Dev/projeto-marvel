import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersServicesService {

  publicKey = '5a237863b3cc2061003cbbc4fe20dc06';
  hash = '9e89b4721902adea15e7f2d491879a2b';
  characterId = '';
  urlApi = `http://gateway.marvel.com/v1/public/characters?ts=1663110861&apikey=${this.publicKey}&hash=${this.hash}&limit=100`;

  constructor( private http:HttpClient ) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.urlApi)
    .pipe(map((data: any) => data.data.results))
  }

  getCharacterSpecific(characterId: any): Observable<any> {
    this.characterId = characterId;
    return this.http.get<any>(`http://gateway.marvel.com/v1/public/characters/${this.characterId}?ts=1663110861&apikey=${this.publicKey}&hash=${this.hash}`)
    .pipe(map((data: any) => data.data.results))
  }

}
