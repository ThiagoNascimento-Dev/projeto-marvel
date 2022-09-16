import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersServicesService {

  // chave enviada no documento de teste
  // publicKey = '5a237863b3cc2061003cbbc4fe20dc06';
  // hash = '9e89b4721902adea15e7f2d491879a2b';


  publicKey = 'a623059db34e289839a63e6816fa7329';
  hash = '7cfa3ac421266086410bde85113caab1';

  timeStamp ='1663352659';
  characterId = '';
  urlApi = `http://gateway.marvel.com/v1/public/characters?ts=${this.timeStamp}&apikey=${this.publicKey}&hash=${this.hash}&limit=15`;

  constructor( private http:HttpClient ) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.urlApi)
    .pipe(map((data: any) => data.data.results))
  }

  getCharacterSpecific(characterId: any): Observable<any> {
    this.characterId = characterId;
    return this.http.get<any>(`http://gateway.marvel.com/v1/public/characters/${this.characterId}?ts=${this.timeStamp}&apikey=${this.publicKey}&hash=${this.hash}`)
    .pipe(map((data: any) => data.data.results))
  }


  getComics(uri: string): Observable<any> {
    return this.http.get<any>(`${uri}?ts=${this.timeStamp}&apikey=${this.publicKey}&hash=${this.hash}`)
    .pipe(map((data: any) => data.data.results))
  }

}
