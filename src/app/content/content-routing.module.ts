import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebDevComponent } from './web-dev/web-dev.component';

const routes: Routes = [
  {path:'web-dev', component:WebDevComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
