import { Injectable } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { FormInterface } from './new-task/new-task-model';

@Injectable({ providedIn: 'root' })
export class TaskServices {
  // In-memory task store; replace with API integration as app scales
  private tasks = dummyTasks;

  /**
   * Retrieve tasks for a given user.
   * @param userId - Identifier of the user whose tasks we need.
   */
  getUserTask(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  /**
   * Add a new task for a user.
   * Generates a unique ID based on timestamp.
   * @param formData - Title, summary, and due date from the form
   * @param userId - ID of the user to assign the task to
   */
  onAddTask(formData: FormInterface, userId: string) {
    const newTask = {
      id: Date.now().toString(), 
      userId,
      title: formData.title,
      summary: formData.summary,
      dueDate: formData.date
    };

    this.tasks.push(newTask);
  }

  /**
   * Mark a task as completed by removing it from the store.
   * @param id - Identifier of the task to remove
   */
  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
