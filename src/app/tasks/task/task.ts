import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInterface } from './task.modle';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {

  @Input() task!:TaskInterface;
  @Output() complete = new EventEmitter<string>()

  onCompleteTask(){
    this.complete.emit(this.task.id)
  }
}
