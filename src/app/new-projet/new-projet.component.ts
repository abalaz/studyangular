import { Component, OnInit } from '@angular/core';
import { Observable, timer} from 'rxjs';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { map, startWith, takeWhile, finalize } from 'rxjs/operators';
interface UserModel {
  name: string;
  age: number;

};

@Component({
  selector: 'app-new-projet',
  templateUrl: './new-projet.component.html',
  styleUrls: ['./new-projet.component.css']
})

export class NewProjetComponent implements OnInit {

  nawm: any;
  now = "2020-06-24T09:00:00.000Z";
  userId = "4321245";
  userIdChangeAfterFiveSeconds = "14324";

   Users: UserModel[] = [
    {
      name: "Tiep Phan",
      age: 30
    },
    {
      name: "Trung Vo",
      age: 28
    },
    {
      name: "Chau Tran",
      age: 29
    },
    {
      name: "Tuan Anh",
      age: 16
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
