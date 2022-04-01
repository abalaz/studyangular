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
    age: 30,
    isEdit: false
    },
    {
    id: 2,
    name: "Ervin Howell",
    age: 55,
    isEdit: false
    },
    {
    id: 3,
    name: "Clementine Bauch",
    age: 26,
    isEdit: false
    },
    {
    id: 4,
    name: "Patricia Lebsack",
    age: 40,
    isEdit: false
    },
    {
    id: 5,
    name: "Chelsey Dietrich",
    age: 35,
    isEdit: false
    },
    {
    id: 6,
    name: "Mrs. Dennis Schulist",
    age: 20,
    isEdit: false
    },
    {
    id: 7,
    name: "Kurtis Weissnat",
    age: 18,
    isEdit: false
    }
  ];

  detailForm = new FormGroup({
    name:new FormControl(),
    age: new FormControl(),

  });
  btnval = "Edit";
  addval="";
  isEditing = false;

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
        this.isEditing = true;
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


  getInfo(id: number): void{
    console.log('FORM', this.detailForm);
    const value = this.detailForm.value;
    console.log(value);
    this.users.forEach(elm =>{
      if(elm.id === id) {
        this.isEditing = false;
        elm.age = value.age;
        elm.name = value.name;
        elm.isEdit = false;
      }
    })
  }
  additem(){
    console.log('Form', this.detailForm)
    const value = this.detailForm.value;
    console.log(value);
    const infor = {
      id: this.users.length + 1,
      name: value.name,
      age: value.age,
      isEdit: false
    };

    this.users.push(infor);
  }
}
