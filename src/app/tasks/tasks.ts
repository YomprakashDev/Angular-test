import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Task } from "./task/task";
import { dummyTasks } from '../dummy-tasks';
import { NewTask } from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [Task,NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})

export class Tasks {

@Input() name?:string;
@Input() userId?:string;

@Output() add = new EventEmitter();

isTaskAdding = false;

tasks = dummyTasks

get selectedUserTask(){
  return this.tasks.filter((task) => task.userId === this.userId)
}

onAddTask(){
  this.isTaskAdding = true
}

onCloseDailog(){
  this.isTaskAdding = false
}

onCompleteTasks(id:string){
  this.tasks = this.tasks.filter((task) => task.id !== id)
}

}
