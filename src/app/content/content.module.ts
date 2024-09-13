import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { WebDevComponent } from './web-dev/web-dev.component';


@NgModule({
  declarations: [
    WebDevComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
