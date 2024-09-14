import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { WebDevComponent } from './web-dev/web-dev.component';
import { AngularComponent } from './web-dev/angular/angular.component';
import { Angular2Component } from './web-dev/angular/angular-2/angular-2.component';
import { Angular3Component } from './web-dev/angular/angular-3/angular-3.component';
import { Angular4Component } from './web-dev/angular/angular-4/angular-4.component';
import { Angular5Component } from './web-dev/angular/angular-5/angular-5.component';
import { RandomComponent } from './random/random.component';
import { Amgular6Component } from './web-dev/angular/amgular-6/amgular-6.component';
import { Angular6Component } from './web-dev/angular/angular-6/angular-6.component';
import { Angular7Component } from './web-dev/angular/angular-7/angular-7.component';
import { Angular8Component } from './web-dev/angular/angular-8/angular-8.component';


@NgModule({
  declarations: [
    WebDevComponent,
    AngularComponent,
    Angular2Component,
    Angular3Component,
    Angular4Component,
    Angular5Component,
    RandomComponent,
    Amgular6Component,
    Angular6Component,
    Angular7Component,
    Angular8Component
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
