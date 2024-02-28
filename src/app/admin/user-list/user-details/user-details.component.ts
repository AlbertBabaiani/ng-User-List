import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{
  user!: User | null

  user_service = inject(UsersService)
  

  ngOnInit(){
    this.user_service.showMoreInfoAboutTheUser.subscribe({
      next: (focused_user: User) => {
        if(this.user === focused_user){
          this.user = null
        }
        else{
          this.user = focused_user
        }
      }
    })
  }
}
