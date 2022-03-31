import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  // name='Tiep phan';
  title = 'angular-study' ;
  constructor() { }

  detailForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(0),
  });

  ngOnInit() {
  }

  getInfo() {
    console.log('FORM', this.detailForm);
    const value = this.detailForm.value;
    console.log(value);

  }
}
