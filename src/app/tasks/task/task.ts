import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInterface } from './task.modle';
import { Card } from "../../ui/card/card";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task',
  imports: [Card,DatePipe],
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
