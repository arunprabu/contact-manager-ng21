import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactService } from '../../services/contact-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts',
  imports: [CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="p-6">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-semibold text-slate-900">List Contacts</h1>
        <a
          routerLink="/contacts/add"
          class="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          Add contact
        </a>
      </div>

      <!-- Spinner -->
      <div class="flex items-center justify-center p-6">
        <div
          class="animate-spin rounded-full h-8 w-8 border-2 border-gray-200 border-t-2 border-t-indigo-600"
        ></div>
      </div>

      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Card UI -->
        @for (contact of contactList$ | async; track $index) {
          <article
            class="flex items-center gap-4 p-4 rounded-lg border border-gray-200 bg-white shadow-sm"
          >
            <div class="min-w-0 flex-1">
              <div class="text-lg font-medium text-slate-900 truncate">{{ contact.name }}</div>
              <div class="text-sm text-gray-600 truncate">{{ contact.email }}</div>
            </div>
            <div class="ml-4">
              <a
                routerLink="/contacts/{{ contact.id }}"
                class="text-sm text-indigo-600 hover:text-indigo-500"
              >
                View Details
              </a>
            </div>
          </article>
        } @empty {
          <div
            class="rounded-md border border-dashed border-gray-200 p-6 text-center text-gray-600 bg-white"
          >
            No contacts yet.
          </div>
        }
      </div>

      <div
        role="alert"
        aria-live="assertive"
        class="mt-3 rounded-md bg-red-50 border border-red-200 px-4 py-3 text-red-800 flex items-start gap-3"
      >
        <div>
          <p class="font-medium">Error</p>
          <p class="text-sm">Unable to load contacts. Please try again later.</p>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class Contacts implements OnInit {
  contactList$!: Observable<any[]>;

  // 1. connect to the service using dependency injection
  constructor(private contactService: ContactService) {
    console.log('1. Inside Constructor');
  }

  ngOnInit(): void {
    console.log('2. Inside ngOnInit');
    // 2. send the request to the service
    this.contactList$ = this.contactService.getContacts() as Observable<any[]>;
    console.log('3. After calling service method, contactList$ is: ', this.contactList$);
    // 3. get the response from the service
  }
}
