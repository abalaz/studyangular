import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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

  delete(i: number): void {
    console.log(i);
    this.users = this.users.filter(elm => elm.id !== i );
  }
  edit(i:number,  ): void {
    console.log(i);

      this.users.forEach(element=> {
        if (element.id === i) {
          element.isEdit = true;
        }
      });

  }
}
