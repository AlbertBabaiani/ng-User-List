import { Component, inject } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  user_service = inject(UsersService)

  users: User[] = this.user_service.users
}
