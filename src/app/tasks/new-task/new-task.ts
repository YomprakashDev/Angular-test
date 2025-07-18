import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormInterface } from './new-task-model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {

  @Output() close = new EventEmitter<void>()
  @Output() add = new EventEmitter<FormInterface>
  enteredTitle = ''
  enteredSummary = '' 
  enteredDate = ''
  onCancle(){
    this.close.emit()
  }

  onSubmit(){
    this.add.emit({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate,
    })
    
  }
}
