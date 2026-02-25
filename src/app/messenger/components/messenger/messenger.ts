import { Component } from '@angular/core';
import { ChildOne } from '../child-one/child-one';
import { ChildTwo } from '../child-two/child-two';

@Component({
  selector: 'app-messenger',
  imports: [ChildOne, ChildTwo],
  template: `
    <div class="p-6 bg-gray-100 min-h-screen">
      <h1 class="text-3xl font-bold mb-6 text-center">
        Any to Any Component Communication Demo with Signal
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <app-child-one></app-child-one>
        <app-child-two></app-child-two>
      </div>
    </div>
  `,
  styles: ``,
})
export class Messenger {}
