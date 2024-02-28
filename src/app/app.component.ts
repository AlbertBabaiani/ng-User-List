import { Component, OnInit, inject } from '@angular/core';
import { ChangePageService } from './Services/change-page.service';
import { Pages } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'UserList';

  current_page: Pages = 'home'

  pages_service = inject(ChangePageService)

  ngOnInit(){
    this.pages_service.current_page.subscribe({
      next: (new_page: Pages) =>{
        this.current_page = new_page
      }
    })
  }
}
