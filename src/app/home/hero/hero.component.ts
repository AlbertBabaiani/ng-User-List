import { Component, inject } from '@angular/core';
import { SubscribtionService } from 'src/app/Services/subscribtion.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  subscribe_service = inject(SubscribtionService)

  registerSubscribtion(): void{
    this.subscribe_service.onSubscribe()
  }
}
