import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { RouterOutletComponent } from './routing/router-outlet/router-outlet.component';
import { AppRoutingModule, routingCompoments } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    RouterOutletComponent,
    routingCompoments
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
