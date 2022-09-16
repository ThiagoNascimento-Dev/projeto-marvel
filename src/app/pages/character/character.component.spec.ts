import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersServicesService } from 'src/app/shared/services/characters-services.service';

import { CharacterComponent } from './character.component';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;
  let characterService: jasmine.SpyObj<CharactersServicesService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterComponent ],
      providers: [{
        provide: CharactersServicesService,
        useValue: jasmine.createSpyObj(CharactersServicesService.name,['getCharacterSpecific', 'getComics']),
      }]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CharacterComponent);
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

  it('deverá iniciar o getCharacterSpecific', () => {
    fixture.detectChanges();
    expect(characterService.getCharacterSpecific).toBeTruthy();
  });

  it('deverá iniciar o getComics', () => {
    fixture.detectChanges();
    expect(characterService.getComics).toBeTruthy();
  });

});
