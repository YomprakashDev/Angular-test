import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskServices } from '../tasks.services';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input() userId!: string;                 // ID of the user creating the task
  @Output() close = new EventEmitter<void>(); // Notify parent to close form

  private tasksServices = inject(TaskServices);

  // Form fields bound via ngModel
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // Cancel task creation
  onCancle() {
    this.close.emit();
  }

  // Add new task and close dialog
  onSubmit() {
    this.tasksServices.onAddTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate
      },
      this.userId
    );

    this.close.emit();
  }
}
