import { Injectable, inject } from '@angular/core';
import { User } from '../Models/User';
import { Subject } from 'rxjs';
import { LogMessageService } from './log-message.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  log_message_service = inject(LogMessageService)

  private _users: User[] = [
    new User('Steve Smith', 'Male', 'Monthly', 'Active'),
    new User('Mery Jane', 'Female', 'Yearly', 'Inactive'), 
    new User('Mark Tyler', 'Male', 'Quaterly', 'Active') 
  ]

  get users(): User[]{
    return this._users;
  }

  showMoreInfoAboutTheUser: Subject<User> = new Subject<User>()

  AddNewUser(name: string, gender: string, subType: string, status: string){
    this._users.push(new User(name, gender, subType, status));

    this.log_message_service.ShowAddedMessage(name)
  }

  showUserDetails(user: User): void{
    this.showMoreInfoAboutTheUser.next(user)
  }

  
}
