import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  template: `
    <div class="border p-4 mt-4">
      <h5>Name: Arun</h5>
      <p>My Parent Currently in City: {{ city }}</p>

      <button class="bg-blue-500 text-white px-4 py-2 rounded" (click)="handleNotifyParents()">
        Notify Parents that I received the status
      </button>
    </div>
  `,
  styles: ``,
})
export class User {
  // Step 1 of Custom Property Binding: let's create custom property
  @Input() city = '';

  // Step 1 of Custom Event Binding: let's create custom event
  @Output() onStatusReceived = new EventEmitter<string>();

  handleNotifyParents() {
    // Step 2 of Custom Event Binding: emit the event to the parent component
    this.onStatusReceived.emit('Status received by John');
  }
}
