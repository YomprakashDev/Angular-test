import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks";



@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  users = DUMMY_USERS

  selectedUserId?:string

  get selectedUser(){
    return this.users.find((item) => item.id === this.selectedUserId)
  }

  onSelectUser(id:string){
    this.selectedUserId = id
  }
}
