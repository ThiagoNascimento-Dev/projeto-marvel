import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersServicesService } from 'src/app/shared/services/characters-services.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  constructor(
    private cService: CharactersServicesService,
    private route: ActivatedRoute
  ) { }

  characters: any = [];

  comicsItems: any = [];

  comics: any = [];
  series: any = [];
  url: any = [];

  ngOnInit(): void {
    const id = this.route.snapshot.params['character'];
    this.getService(id);
  }

  async getService(id: any) {
    await this.cService.getCharacterSpecific(id).subscribe(response => {
      this.characters = response;
      response[0].comics.items.forEach((element: { resourceURI: any; }) => {
        this.getComics(element.resourceURI);
      });
      response[0].series.items.forEach((element: { resourceURI: any; }) => {
        this.getSeries(element.resourceURI);
      });
      response[0].urls.forEach((element: { url: any; }) => {
        this.getUrl(element.url);
      });
    })
  }

  getComics(uri: any) {
    this.cService.getComics(uri).subscribe(x => {
      this.comics.push(x[0]);
    })
  }

  getSeries(uri: any) {
    this.cService.getComics(uri).subscribe(x => {
      this.series.push(x[0]);
    })
  }

  getUrl(url: any) {
      this.url.push(url);
  }

}
