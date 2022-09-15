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
  allCharactersList: any = [];
  changeView: boolean = false;
  buscaTotal = -1;
  newTotal = 27;

  ngOnInit(): void {
    this.getService();
    this.change('card');
  }

  getService() {
    this.allCharactersList = this.cService.getAllCharacters();
    this.allCharacters = this.allCharactersList;
  }

  showCharacter(id: any) {
    console.log('id:', id);
    this.router.navigate(['/character/'+id]);
  }

  change(type: string) {
    const cardView = document.getElementsByClassName('selector-view')[0] as HTMLElement;
    const listView = document.getElementsByClassName('selector-view')[1] as HTMLElement;

    if (type === 'card') {
      this.changeView = true;
      cardView.classList.add('active');
      listView.classList.remove('active');
    } else {
      this.changeView = false;
      cardView.classList.remove('active');
      listView.classList.add('active');
    }
  }

  // public search(c:string) {
  //   console.log(c);
  //   c = c ? c.trim():'';
  //   this.allCharacters = this.allCharactersList.filter((ca: any) => ca.name.toLowerCase().includes(c.toLowerCase()));
  //   this.newTotal = this.allCharacters.length;
  //   console.log(this.newTotal);

  //   if (this.buscaTotal !== this.newTotal) {
  //     this.buscaTotal = this.newTotal;
  //   } else if (!c) {
  //     this.buscaTotal = -1;
  //   }
  // }


}
