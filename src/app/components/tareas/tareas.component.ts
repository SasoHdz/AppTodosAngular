import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})

export class TareasComponent {
  todoList : Tarea[] = [];
  nameTodo = '';

  todoTest : Tarea[] = [{name:"hsadsa",state:false},{name:"h",state:false},{name:"hsa",state:false}];

  constructor() {

  }

  ngOnInit():void {

  }

  addTodo(){
    this.todoList.push({name: this.nameTodo, state: false })
    console.log(this.todoList)
    this.nameTodo = ''
  }

  deleteTodo(indice:number):void{
    this.todoList.splice(indice,1);
  }

  checkTodo(indice:number):void{
    this.todoList[indice].state = true;
  }
}
