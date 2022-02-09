import { AgendaComponent } from './agenda/agenda.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
     component:HomeComponent
  },
  {
    path:"cardapio",
    component:CardapioComponent
  },
  {
    path:"agenda",
    component:AgendaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
