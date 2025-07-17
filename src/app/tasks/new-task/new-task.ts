import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {

  @Output() close = new EventEmitter<void>()

  onCancle(){
    this.close.emit()
  }
}
