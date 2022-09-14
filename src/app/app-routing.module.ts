import { CharacterComponent } from './pages/character/character.component';
import { CharactersListComponent } from './pages/characters-list/characters-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: 'characters-list' },
  { path:'characters-list', component: CharactersListComponent},
  { path:'character/:character', component: CharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
