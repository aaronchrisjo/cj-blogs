import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
  ],
  exports:[
    NavbarComponent
  ]
})
export class ApplicationModule { }
