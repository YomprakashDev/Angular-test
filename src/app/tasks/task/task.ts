import { Component, inject, Input } from '@angular/core';
import { TaskInterface } from './task.modle';
import { Card } from '../../ui/card/card';
import { DatePipe } from '@angular/common';
import { TaskServices } from '../tasks.services';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input() task!: TaskInterface; // Task to render (input from parent)

  // Inject task service for completion logic
  private tasksService = inject(TaskServices);

  // Trigger task completion
  onCompleteTask() {
    this.tasksService.onCompleteTask(this.task.id);
  }
}
