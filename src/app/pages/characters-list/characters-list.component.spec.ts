import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersServicesService } from 'src/app/shared/services/characters-services.service';

import { CharactersListComponent } from './characters-list.component';

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;
  let characterService: jasmine.SpyObj<CharactersServicesService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersListComponent ],
      providers: [{
        provide: CharactersServicesService,
        useValue: jasmine.createSpyObj(CharactersServicesService.name,['getAllCharacters']),
      }]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CharactersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deverá iniciar o characterService', () => {
    fixture.detectChanges();
    expect(CharactersServicesService).toBeTruthy();
  });

  it('deverá iniciar o getAllCharacters', () => {
    fixture.detectChanges();
    expect(characterService.getAllCharacters).toBeTruthy();
  });

});
