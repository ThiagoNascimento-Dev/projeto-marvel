import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersServicesService } from 'src/app/shared/services/characters-services.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  constructor(
    private cService: CharactersServicesService,
    public router: Router
  ) { }

  allCharacters: any = [];

  ngOnInit(): void {
    this.testeService();
  }

  testeService() {
    this.allCharacters = this.cService.getAllCharacters();
  }

  showCharacter(id: any) {
    console.log('id:', id);
    this.router.navigate(['/character/'+id]);
  }

}
