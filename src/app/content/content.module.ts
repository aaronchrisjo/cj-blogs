import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { WebDevComponent } from './web-dev/web-dev.component';
import { AngularComponent } from './web-dev/angular/angular.component';


@NgModule({
  declarations: [
    WebDevComponent,
    AngularComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
