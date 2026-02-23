import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContactService } from '../../services/contact-service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-details',
  imports: [RouterLink, CommonModule],
  template: `
    <div class="p-6">
      <div
        class="max-w-xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm"
        role="region"
        aria-label="Contact details"
      >
        <h2 class="text-xl font-semibold text-slate-900 mb-4">View Contact Details</h2>

        <div class="mb-4">
          <a
            routerLink="/contacts"
            class="text-sm text-indigo-600 hover:text-indigo-500 inline-flex items-center gap-2"
            aria-label="Go back to contacts"
          >
            <!-- back chevron -->
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
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Go back
          </a>
        </div>

        <!-- Spinner -->
        <div class="flex items-center justify-center p-6">
          <div
            class="animate-spin rounded-full h-8 w-8 border-2 border-gray-200 border-t-2 border-t-indigo-600"
          ></div>
        </div>

        @if (contact$ | async; as contact) {
          <header class="mb-3">
            <h2 class="text-xl font-semibold text-slate-900">{{ contact?.name }}</h2>
            <p class="text-sm text-slate-500">Full details</p>
          </header>

          <section class="mt-3 space-y-2">
            <p class="text-sm">
              <span class="font-semibold text-slate-700">Email:</span>
              <span class="text-slate-900">{{ contact?.email }}</span>
            </p>
            <p class="text-sm">
              <span class="font-semibold text-slate-700">Phone:</span>
              <span class="text-slate-900">{{ contact.phone }}</span>
            </p>
          </section>

          <footer class="mt-4 flex flex-wrap gap-3">
            <button
              class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              type="button"
              aria-label="Update contact"
            >
              Update
            </button>
            <button
              class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-300"
              type="button"
              aria-label="Delete contact"
            >
              Delete
            </button>
          </footer>

          <div
            role="alert"
            aria-live="assertive"
            class="mt-3 rounded-md bg-red-50 border border-red-200 px-4 py-3 text-red-800 flex items-start gap-3"
          >
            <div>
              <p class="font-medium">Error</p>
              <p class="text-sm">Unable to load contact details. Please try again later.</p>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class ContactDetails implements OnInit {
  contact$!: Observable<any>;
  private contactId!: string | number;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
  ) {
    // reading url param from the route
    this.contactId = this.route.snapshot.paramMap.get('id') as string; // id is the url param defined in the route config
    console.log(this.contactId);
  }

  ngOnInit() {
    // send a request to the service -- pass the id of the contact
    this.contact$ = this.contactService.getContactById(this.contactId) as Observable<any>;
  }
}
