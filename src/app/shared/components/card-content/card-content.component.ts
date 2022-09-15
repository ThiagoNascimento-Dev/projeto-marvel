import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  @Input() infoContent: any = [];

  ngOnInit(): void {
  }

  showCharacter(id: any) {
    console.log('id:', id);
    this.router.navigate(['/character/'+id]);
  }

}
