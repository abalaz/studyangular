import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    AppRoutingModule, ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
