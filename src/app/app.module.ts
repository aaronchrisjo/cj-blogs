import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationModule } from './application/application.module';
import { ContentRoutingModule } from './content/content-routing.module';
import { ApplicationRoutingModule } from './application/application-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApplicationModule,
    ContentRoutingModule,
    ApplicationRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
