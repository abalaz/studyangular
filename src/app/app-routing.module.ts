import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './routing/first/first.component';
import { SecondComponent } from './routing/second/second.component';
import { ThirdComponent } from './routing/third/third.component';
const routes: Routes = [
  {path:'first', component: FirstComponent},
  {path:'second', component: SecondComponent},
  {path:'third', component: ThirdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingCompoments = [FirstComponent, SecondComponent, ThirdComponent]
