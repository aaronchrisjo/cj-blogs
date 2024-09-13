import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { WebDevComponent } from './web-dev/web-dev.component';
import { AngularComponent } from './web-dev/angular/angular.component';
import { Angular2Component } from './web-dev/angular/angular-2/angular-2.component';
import { Angular3Component } from './web-dev/angular/angular-3/angular-3.component';


@NgModule({
  declarations: [
    WebDevComponent,
    AngularComponent,
    Angular2Component,
    Angular3Component
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
