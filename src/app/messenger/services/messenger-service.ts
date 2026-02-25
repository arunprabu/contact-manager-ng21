import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  message = signal('Hello!!!!');

  updateMessage(newMessage: string) {
    console.log(newMessage);
    this.message.set(newMessage);
  }
}
