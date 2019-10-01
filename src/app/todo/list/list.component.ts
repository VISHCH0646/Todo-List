import { Component, OnInit } from '@angular/core';
import {TodoList} from '../todo.list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private o:TodoList) { }
  wlist=[]
  ngOnInit() {this.wlist=this.o.getlist()
  }
  
  

}
