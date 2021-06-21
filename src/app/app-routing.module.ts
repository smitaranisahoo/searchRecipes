import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ReceipeCardComponent } from './receipe-card/receipe-card.component';

const routes: Routes = [

  {
    path: "",
    component: ReceipeCardComponent,
  },
  {
    path: "navbar",
    component: SearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
