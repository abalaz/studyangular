import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  users =[
    {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    age: 30,
    isEdit: false
    },
    {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    age: 55,
    isEdit: false
    },
    {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    age: 26,
    isEdit: false
    },
    {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    age: 40,
    isEdit: false
    },
    {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    age: 35,
    isEdit: false
    },
    {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    age: 20,
    isEdit: false
    },
    {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    age: 18,
    isEdit: false
    }
  ]
  detailForm = new FormGroup({
    name:new FormControl(),
    age: new FormControl(),

  });
  btnval = "Edit";


  constructor() { }

  ngOnInit(): void {
  }

  delete(i: number): void {
    console.log(i);
    this.users = this.users.filter(elm => elm.id !== i );
  }

  edit(i:any): void {
    this.users.forEach(element=> {
      // find out the user
      if (element.id === i.id) {
        const name = i.name;
        const age= i.age;
        element.isEdit = true;
        this.detailForm.patchValue({
          name: name,
          age: age
        })
      }
      if (element.id === i.id){
        this.btnval = "done";
        }
      });
  }
  doneEdit(id: number): void {
    this.users.forEach(element=> {
      if (element.id === id) {
        element.isEdit = false;
      }
    });
  }

  getInfo(id: number): void{
    console.log('FORM', this.detailForm);
    const value = this.detailForm.value;
    console.log(value);
    this.users.forEach(elm =>{
      if(elm.id === id) {
        elm.age = value.age;
        elm.name = value.name;
        elm.isEdit = false;
      }
    })

  }
}
