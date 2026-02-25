import { Component, inject } from '@angular/core';
import { MessengerService } from '../../services/messenger-service';

@Component({
  selector: 'app-child-one',
  imports: [],
  template: `
    <h2>Child One Component</h2>
    <p>This is the first child component.</p>
    <p>The message from the service is: {{ message() }}</p>

    <button
      type="button"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      (click)="handleSendMessage()"
    >
      Send Message to Child Two
    </button>
  `,
  styles: ``,
})
export class ChildOne {
  private messengerService = inject(MessengerService);
  // keep a reference to the signal, not its value
  message = this.messengerService.message;

  handleSendMessage() {
    const newMessage = 'Hello from Child One!';
    this.messengerService.updateMessage(newMessage); // Update the message in the service
  }
}
