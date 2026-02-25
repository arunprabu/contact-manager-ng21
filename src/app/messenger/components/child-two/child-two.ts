import { Component, inject } from '@angular/core';
import { MessengerService } from '../../services/messenger-service';

@Component({
  selector: 'app-child-two',
  imports: [],
  template: `
    <h2>Child Two Component</h2>
    <p>This is the second child component.</p>
    <p>The message from the service is: {{ message() }}</p>
  `,
  styles: ``,
})
export class ChildTwo {
  private messengerService = inject(MessengerService);
  message = this.messengerService.message;
}
