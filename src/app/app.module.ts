import { CharactersServicesService } from './shared/services/characters-services.service';
import { MaterialModule } from './shared/material/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CharactersListComponent } from './pages/characters-list/characters-list.component';
import { CharacterComponent } from './pages/character/character.component';
import { CardContentComponent } from './shared/components/card-content/card-content.component';
import { ListContentComponent } from './shared/components/list-content/list-content.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharacterComponent,
    CardContentComponent,
    ListContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    CharactersServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
