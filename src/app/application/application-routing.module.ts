import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebDevComponent } from '../content/web-dev/web-dev.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'web-dev', component:WebDevComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }

