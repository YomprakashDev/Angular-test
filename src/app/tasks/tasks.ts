import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { TaskServices } from './tasks.services';
import { dummyTasks } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input() name?: string;        // Display name of the selected user
  @Input() userId!: string;      // ID used to fetch tasks for the selected user

  @Output() add = new EventEmitter(); // Emits when a new task is created

  isTaskAdding = false;          // Tracks dialog visibility for adding a task

  tasks = dummyTasks;            // Temporary task store; ideally fetched via service

  constructor(private taskServices: TaskServices) {}

  // Returns tasks assigned to the current user
  get selectedUserTask() {
    return this.taskServices.getUserTask(this.userId);
  }

  // Opens task creation dialog
  onAddTask() {
    this.isTaskAdding = true;
  }

  // Closes task creation dialog
  onCloseDailog() {
    this.isTaskAdding = false;
  }

  // Marks a task as completed
  onCompleteTasks(id: string) {
    return this.taskServices.onCompleteTask(id);
  }
}
