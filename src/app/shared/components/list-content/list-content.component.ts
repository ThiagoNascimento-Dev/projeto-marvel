import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.scss']
})
export class ListContentComponent implements OnInit {

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
