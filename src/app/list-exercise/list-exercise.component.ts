import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
interface info{
  id: number,
  exercise: string,
  complete: boolean,
  isEdit: boolean,
}
@Component({
  selector: 'app-list-exercise',
  templateUrl: './list-exercise.component.html',
  styleUrls: ['./list-exercise.component.css']
})

export class ListExerciseComponent implements OnInit {
  @ViewChild('editData') editDataRef: ElementRef;

  Lists : info[]=[
    {
      id: 1,
      exercise: "two way binding",
      complete:false,
      isEdit: false,
    },
    {
      id: 2,
      exercise: "routing",
      complete:false,
      isEdit: false,
    },
    {
      id: 3,
      exercise: "ngfor and if",
      complete:false,
      isEdit: false,
    },
    {
      id: 4,
      exercise: "switchcase",
      complete:true,
      isEdit: false,
    },

  ]

  detailForm = new FormGroup({
    exercise:new FormControl(''),
    complete: new FormControl(false),
  });
  isEdited= false;
  editId: any;

  constructor() { }

  ngOnInit(): void {
  }

  delet(id: number): void{
    console.log(id)
    this.Lists = this.Lists.filter(elm => elm.id !== id);
  }

  done(id: number): void {
    this.Lists.forEach(i => {
      if (i.id ===id) {
        i.complete = !i.complete;
      }
    });
  }

  edit(list: info): void{
    this.Lists.forEach(elm=>{
      if(elm.id ===  list.id){
        this.editId = list.id;
        this.isEdited = true;
        // this.detailForm.patchValue({
        //   exercise: list.exercise,
        //   complete: list.complete,
        // });
        console.log(this.editDataRef);
        this.editDataRef.nativeElement.value = list.exercise;

      }
      console.log(list.isEdit)
    })
  }
  saveList(editData: any):void{
    console.log(editData);
    // const value =this.detailForm.value;
    // console.log(value);
    // console.log(this.editId);
    // this.Lists.forEach(i => {
    //   if (i.id === this.editId) {
    //     i.exercise = value.exercise;
    //     i.complete = value.complete;
    //     this.editId = null;
    //     this.isEdited = false;
    //     this.detailForm.reset();
    //   }
    // });
  }

  addItem(){
    console.log('Form', this.detailForm)
    const value =this.detailForm.value;
    console.log(value);
    const news = {
      id: this.Lists.length + 1,
      exercise: value.exercises ,
      complete: value.complete = false,
      isEdit: value.isEdit = false
    };
    this.Lists.push(news);
  }

}
