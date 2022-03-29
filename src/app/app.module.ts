import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListOneComponent } from './components/list-one/list-one.component';
import { ListTwoComponent } from './components/list-two/list-two.component';
import { ListThreeComponent } from './components/list-three/list-three.component';
import { ListFourComponent } from './components/list-four/list-four.component';
import { ListFiveComponent } from './components/list-five/list-five.component';
import { ListSixComponent } from './components/list-six/list-six.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOneComponent,
    ListTwoComponent,
    ListThreeComponent,
    ListFourComponent,
    ListFiveComponent,
    ListSixComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
