import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
interface info{
  exercise: string,
  complet: Boolean,
}
@Component({
  selector: 'app-list-exercise',
  templateUrl: './list-exercise.component.html',
  styleUrls: ['./list-exercise.component.css']
})

export class ListExerciseComponent implements OnInit {
  Lists : info[]=[
    {
      exercise: "two way binding",
      complet:false
    },
    {
      exercise: "routing",
      complet:false
    },
    {
      exercise: "ngfor and if",
      complet:false
    },
    {
      exercise: "switchcase",
      complet:false
    },

  ]
  detailForm = new FormGroup({
    exercise:new FormControl(),
    complet: new FormControl(),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
