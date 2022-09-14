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

  ngOnInit(): void {
    const id = this.route.snapshot.params['character'];
    this.testeService(id);
  }

  testeService(id: any) {
    this.characters = this.cService.getCharacterSpecific(id);
  }

}
