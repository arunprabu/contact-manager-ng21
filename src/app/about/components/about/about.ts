import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { EllipsisPipe } from '../../../shared/pipes/ellipsis-pipe';

@Component({
  selector: 'app-about',
  imports: [UpperCasePipe, LowerCasePipe, DatePipe, EllipsisPipe],
  template: `
    <div class="p-6">
      <h1 class="text-3xl font-bold mb-1">Pipes</h1>
      <p class="text-gray-600 mb-6">Transform data in the template</p>

      <div class="space-y-6">
        <section>
          <h2 class="text-xl font-semibold mb-3">Text Transformation</h2>
          <ul class="space-y-2">
            <li class="p-3 bg-gray-100 rounded">Without Pipe: {{ randomText }}</li>
            <li class="p-3 bg-gray-100 rounded">Uppercase: {{ randomText | uppercase }}</li>
            <li class="p-3 bg-gray-100 rounded">Lowercase: {{ randomText | lowercase }}</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-3">Date Pipe</h2>
          <ul class="space-y-2">
            <li class="p-3 bg-gray-100 rounded">Default: {{ today }}</li>
            <li class="p-3 bg-gray-100 rounded">Date Pipe: {{ today | date }}</li>
            <li class="p-3 bg-gray-100 rounded">Short Date: {{ today | date: 'shortDate' }}</li>
            <li class="p-3 bg-gray-100 rounded">
              Custom: {{ today | date: 'dd/MM/yyyy hh:mm:ss a' }}
            </li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-3">Ellipsis Pipe</h2>
          <ul class="space-y-2">
            <li class="p-3 bg-gray-100 rounded">Default: {{ randomText }}</li>
            <li class="p-3 bg-gray-100 rounded">With Ellipsis: {{ randomText | ellipsis }}</li>
            <li class="p-3 bg-gray-100 rounded">30 chars: {{ randomText | ellipsis: 30 }}</li>
            <li class="p-3 bg-gray-100 rounded">50 chars: {{ randomText | ellipsis: 50 }}</li>
          </ul>
        </section>
      </div>
    </div>
  `,
  styles: ``,
})
export class About {
  randomText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.';

  today = new Date();
}
