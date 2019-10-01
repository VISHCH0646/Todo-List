import { Component, OnInit } from '@angular/core';
import {TodoList} from '../todo.list';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  constructor(private o:TodoList,private _snackBar: MatSnackBar) { }
  work
  wdate
  comment
  openSnackBar() {
    this._snackBar.open("Work Added","OK",
      {duration: 2000});}

  addWork()
  {
    /*this.mylist.work=this.work
    this.mylist.date=this.wdate
    this.o.setList(this.mylist)*/
     const mylist={
      work:this.work,
      date:this.wdate,
      comment:this.comment
    }
    console.log(mylist)
    this.o.setList(mylist);
  }
}
