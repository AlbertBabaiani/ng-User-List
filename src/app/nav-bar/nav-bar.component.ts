import { Component, inject } from '@angular/core';
import { SubscribtionService } from '../Services/subscribtion.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  subscribe_service = inject(SubscribtionService)

  registerSubscribtion(): void{
    this.subscribe_service.onSubscribe()
  }
}
