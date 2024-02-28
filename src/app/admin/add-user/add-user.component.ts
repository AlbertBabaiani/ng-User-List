import { Component, inject } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  name: string = ''
  gender: 'Male' | "Female" = "Male"

  subType: "Monthly" | "Quaterly" | "Yearly" = "Monthly"
  subTypes: ["Monthly", "Quaterly", "Yearly"] = ["Monthly", "Quaterly", "Yearly"]

  status: "Active" | "Inactive" = "Active"
  statuses: ["Active", "Inactive"] = ["Active", "Inactive"]

  user_service = inject(UsersService)

  CreateNewUser(): void{
    if(this.name.trim()){
      this.user_service.AddNewUser(this.name.trim(), this.gender,
      this.subType, this.status)
      this.name = ''
    }
  }
}
