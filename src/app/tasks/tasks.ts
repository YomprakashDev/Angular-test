import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from "./task/task";
import { dummyTasks } from '../dummy-tasks';
import { NewTask } from './new-task/new-task';
import { FormInterface } from './new-task/new-task-model';
import { taskServices } from './tasks.services';
@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})

export class Tasks {

  @Input() name?: string;
  @Input() userId!: string;

  @Output() add = new EventEmitter();

  private tasksServices = new taskServices()
  isTaskAdding = false;

  tasks = dummyTasks

  get selectedUserTask() {
    return this.tasksServices.getUserTask(this.userId);
  }

  onAddTask() {
    this.isTaskAdding = true
  }

  onCloseDailog() {
    this.isTaskAdding = false
  }

  onCompleteTasks(id: string) {

  }
  onAddFormTask() {

    this.isTaskAdding = false

  }

}
