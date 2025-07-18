// Angular core imports
import { Component, signal } from '@angular/core';

// Application-specific imports
import { HeaderComponent } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { DUMMY_USERS } from './dummy-users';

// Main app component decorator
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // List of dummy users loaded from external file
  users = DUMMY_USERS;

  // ID of the currently selected user
  selectedUserId?: string;

  // get function to return the full user object of the selected user
  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }

  // Method to update selected user ID
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
