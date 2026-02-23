import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactService } from '../../services/contact-service';
import { Observable, of } from 'rxjs';
import { map, catchError, startWith } from 'rxjs/operators';

// Contacts View Model
interface ContactsVm {
  contacts: any[] | null;
  loading: boolean;
  error: string | null;
}

@Component({
  selector: 'app-contacts',
  imports: [CommonModule, RouterLink],
  template: `
    <div class="p-6">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-semibold text-slate-900">List Contacts</h1>
        <a
          routerLink="/contacts/add"
          class="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          Add contact
        </a>
      </div>

      @if (contactListVm$ | async; as vm) {
        <!-- Spinner -->
        @if (vm.loading) {
          <div class="flex items-center justify-center p-6">
            <div
              class="animate-spin rounded-full h-8 w-8 border-2 border-gray-200 border-t-2 border-t-indigo-600"
            ></div>
          </div>
        }

        <!-- Contact Grid -->
        <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          @for (contact of vm.contacts; track contact.id) {
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

        <!-- Error Banner -->
        @if (vm.error) {
          <div
            role="alert"
            aria-live="assertive"
            class="mt-3 rounded-md bg-red-50 border border-red-200 px-4 py-3 text-red-800 flex items-start gap-3"
          >
            <p class="font-medium">Error</p>
            <p class="text-sm">{{ vm.error }}</p>
          </div>
        }
      }
    </div>
  `,
})
export class Contacts implements OnInit {
  contactListVm$!: Observable<ContactsVm>;

  constructor(private contactService: ContactService) {
    console.log('1. Inside Constructor');
  }

  ngOnInit(): void {
    console.log('2. Inside ngOnInit');

    this.contactListVm$ = this.contactService.getContacts().pipe(
      // if successful, map the contacts to the view model with loading false and no error
      map((contacts) => ({ contacts: contacts, loading: false, error: null }) as ContactsVm),
      // if error occurs, catch it and return a view model with null contacts, loading false, and an error message
      catchError((err) =>
        of({
          contacts: null,
          loading: false,
          error: 'Unable to load contacts. Please try again later.',
        } as ContactsVm),
      ),
      startWith({ contacts: null, loading: true, error: null } as ContactsVm), // initial loading state
    );
  }
}
