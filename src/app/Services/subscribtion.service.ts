import { Injectable, inject } from '@angular/core';
import { LogMessageService } from './log-message.service';

@Injectable({
  providedIn: 'root'
})
export class SubscribtionService {

  constructor() { }

  log_message_service = inject(LogMessageService)

  onSubscribe(): void{
    this.log_message_service.showSubscribtionMessage()
  }
}
