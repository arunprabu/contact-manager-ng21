import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  template: `
    <div class="container">
      <h1>Counter | Signal Demo</h1>
      <p>Count: {{ count() }}</p>

      <button
        type="button"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        (click)="handleIncrement()"
      >
        Increment
      </button>

      <p>Counter: {{ count() }}</p>
    </div>
  `,
  styles: ``,
})
export class Counter {
  count = signal(100);

  handleIncrement() {
    this.count.update((currentValue) => {
      return currentValue + 1;
    });
  }
}
