import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebDevComponent } from './web-dev/web-dev.component';
import { AngularComponent } from './web-dev/angular/angular.component';

const routes: Routes = [
  {path:'web-dev', component:WebDevComponent},
  {path:'angular', component:AngularComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
