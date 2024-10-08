import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebDevComponent } from './web-dev/web-dev.component';
import { AngularComponent } from './web-dev/angular/angular.component';
import { Angular2Component } from './web-dev/angular/angular-2/angular-2.component';
import { Angular3Component } from './web-dev/angular/angular-3/angular-3.component';
import { Angular4Component } from './web-dev/angular/angular-4/angular-4.component';
import { Angular5Component } from './web-dev/angular/angular-5/angular-5.component';
import { RandomComponent } from './random/random.component';
import { Angular6Component } from './web-dev/angular/angular-6/angular-6.component';
import { Angular7Component } from './web-dev/angular/angular-7/angular-7.component';
import { Angular8Component } from './web-dev/angular/angular-8/angular-8.component';

const routes: Routes = [
  {path:'web-dev', component:WebDevComponent},
  {path:'random', component:RandomComponent},


  {path:'angular', component:AngularComponent},
  {path:'angular-2', component:Angular2Component},
  {path:'angular-3', component:Angular3Component},
  {path:'angular-4', component:Angular4Component},
  {path:'angular-5', component:Angular5Component},
  {path:'angular-6', component:Angular6Component},
  {path:'angular-7', component:Angular7Component},
  {path:'angular-8', component:Angular8Component},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
