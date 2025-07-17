import { Component, computed, signal, Input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { UserType } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({ required: true }) user!: UserType
  @Input() selected?: boolean;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
