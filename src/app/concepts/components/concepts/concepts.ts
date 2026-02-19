import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user/user';

@Component({
  selector: 'app-concepts',
  imports: [FormsModule, User],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-4">Core Concepts of Angular</h1>
      <h2>Data Binding</h2>
      <p class="text-lg mb-6">
        Data binding is a powerful feature in Angular that allows you to synchronize data between
        the component and the template. It enables you to display dynamic data and respond to user
        interactions seamlessly.
      </p>

      <hr />
      <h3 class="pt-2">1. Interpolation</h3>
      <p>App Name: {{ appName }}</p>

      <hr />
      <h3 class="pt-2">2. Property Binding</h3>
      <input type="text" [value]="appName" class="border p-2" />
      <p [title]="appName">Mouseover to see the tooltip</p>

      <hr />
      <h3 class="pt-2">3. Event Binding</h3>
      <button (click)="handleClickMe()">Click Me</button>

      <hr />
      <h3 class="pt-2">4. Two-Way Binding</h3>
      <!-- One way Binding -->
      <p>Course Name: {{ courseName }}</p>

      <!-- One way Binding -->
      <input type="text" [value]="courseName" class="border p-2" />
      <br />
      <!-- Two way Binding -->
      <input type="text" [(ngModel)]="courseName" class="border p-2" />

      <hr />
      <h3 class="pt-4">5. Custom Property Binding</h3>
      <!-- // Step 2 of Custom Property Binding: pass the data via  custom property-->
      <app-user [city]="cityParentsLive" (onStatusReceived)="handleStatusReceived($event)" />
      <!-- Step 3 of Custom Property Binding (for the above line):
       receive the data in the child component and emit the event back to parent component -->

      <hr />
      <h2 class="text-2xl pt-4">Structural Directives Demo</h2>

      <h3>@ if directive</h3>
      @if (isAuthenticated) {
        <div
          role="status"
          aria-live="polite"
          class="mt-4 rounded-md bg-green-50 border border-green-200 px-4 py-3 text-green-800 shadow-sm flex items-start gap-3"
        >
          <div>
            <p class="font-medium">Success</p>
            <p class="text-sm">Welcome! You are successfully authenticated.</p>
          </div>
        </div>
      } @else {
        <div
          role="alert"
          aria-live="assertive"
          class="mt-3 rounded-md bg-red-50 border border-red-200 px-4 py-3 text-red-800 flex items-start gap-3"
        >
          <div>
            <p class="font-medium">Error</p>
            <p class="text-sm">Please Login</p>
          </div>
        </div>
      }

      <hr />
      <h3 class="mt-6">@ for directive</h3>
      <ol class="list-decimal list-inside">
        @for (skill of skills; track $index) {
          <li>{{ skill }}</li>
        }
      </ol>
    </div>
  `,
  styles: ``,
})
export class Concepts {
  appName = 'Contact Manager App';
  courseName = 'Angular v21';

  // Parent component has the data
  cityParentsLive = 'Amsterdam';

  isAuthenticated = false;

  skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular'];

  handleClickMe() {
    alert('Button clicked!');
  }

  handleStatusReceived(event: string) {
    alert(event);
  }
}
