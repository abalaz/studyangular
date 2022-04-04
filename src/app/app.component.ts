import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:'<p>Super power boost: {{2 | firstPipe: 10}}</p>'
})
export class AppComponent {
  title = 'angular-study';
  birthday = new Date(1985,3,15);

}
