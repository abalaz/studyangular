import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewProjetComponent } from './new-projet/new-projet.component';
import { FirstPipePipe } from './pipe/first-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewProjetComponent,
    FirstPipePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
