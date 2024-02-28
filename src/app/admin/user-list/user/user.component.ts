import { Component, Input, OnInit, inject } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  @Input()
  user!: User

  selectedUser: string = ''

  user_service = inject(UsersService)

  showInfo(): void{
    this.user_service.showUserDetails(this.user)
  }

  ngOnInit(){
    this.user_service.showMoreInfoAboutTheUser.subscribe({
      next: (focused_user: User) =>{
        if(this.selectedUser === focused_user.name){
          this.selectedUser = ''
        }
        else{
          this.selectedUser = focused_user.name
        }
      }
    })
  }
}
