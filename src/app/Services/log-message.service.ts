import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class LogMessageService {

  constructor() { }

  ShowAddedMessage(name: string): void{
    Swal.fire({
      title: "Complete!",
      text: `${name} was added.`,
      icon: "success"
    });
  }

  showSubscribtionMessage(): void{
    Swal.fire({
      title: "<strong>Congratulations!</strong>",
      icon: "success",
      text: 'You are subscribed to our course.',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: 'Great!',
      cancelButtonText: 'Cancel',
    });
  }
}
