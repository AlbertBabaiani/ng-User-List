import { Component, inject } from '@angular/core';
import { SubscribtionService } from 'src/app/Services/subscribtion.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  subscribe_service = inject(SubscribtionService)

  registerSubscribtion(): void{
    this.subscribe_service.onSubscribe()
  }
}
