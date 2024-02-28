import { Component, inject } from '@angular/core';
import { SubscribtionService } from '../Services/subscribtion.service';
import { ChangePageService } from '../Services/change-page.service';

export type Pages = 'home' | 'admin'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  current_page: Pages = 'home'

  subscribe_service = inject(SubscribtionService)
  pages_service = inject(ChangePageService)

  changePage(new_page: Pages): void{
    this.current_page = new_page
    this.pages_service.changePage(new_page)
  }


  registerSubscribtion(): void{
    this.subscribe_service.onSubscribe()
  }
}
