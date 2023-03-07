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
  keyStorage = 'todos';


  constructor() {

  }

  ngOnInit():void {
    const localStorageItem = localStorage.getItem(this.keyStorage);
    if(!localStorageItem){
      localStorage.setItem(this.keyStorage,JSON.stringify([]));
    }
    else {
      this.todoList = JSON.parse(localStorageItem);
    }
  }

  addTodo(){
    this.todoList.push({name: this.nameTodo, state: false })
    console.log(this.todoList)
    this.nameTodo = ''
    localStorage.setItem(this.keyStorage, JSON.stringify(this.todoList));
  }

  deleteTodo(indice:number):void{
    this.todoList.splice(indice,1);
    localStorage.setItem(this.keyStorage, JSON.stringify(this.todoList));
  }

  checkTodo(indice:number):void{
    this.todoList[indice].state = true;
    localStorage.setItem(this.keyStorage, JSON.stringify(this.todoList));
  }
}
