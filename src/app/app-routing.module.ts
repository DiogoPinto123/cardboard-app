import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCardComponent } from './create-card/create-card.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [{path: '', component: MainPageComponent},{path: 'create', component: CreateCardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
