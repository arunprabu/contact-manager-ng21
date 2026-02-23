import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContactService } from '../../services/contact-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-contact',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  template: `
    <div class="p-6 max-w-lg mx-auto">
      <h2 class="text-xl font-semibold text-slate-900 mb-4">Add Contact</h2>

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

      <!--Patch up the HTML form with its TS equivalent using formGroup-->
      <form class="space-y-4" [formGroup]="addContactForm" (ngSubmit)="handleAddContact()">
        <div>
          <label class="block text-sm font-medium text-slate-700"
            >Name <span class="text-red-600">*</span></label
          >
          <!-- Step 4: Patch up the HTML inputs with their TS equivalents using formControlName -->
          <input
            type="text"
            formControlName="name"
            class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            aria-required="true"
            aria-label="Name"
          />
          <!-- Step 6: Manage form validation and error messages -->
          @if (addContactForm.get('name')?.touched && addContactForm.get('name')?.invalid) {
            <div class="text-sm text-red-600 mt-1">
              <div>Name is required.</div>
            </div>
          }
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700"
            >Email <span class="text-red-600">*</span></label
          >
          <input
            type="email"
            formControlName="email"
            class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            aria-required="true"
            aria-label="Email"
          />
          @if (addContactForm.get('email')?.touched && addContactForm.get('email')?.invalid) {
            <div class="text-sm text-red-600 mt-1">
              @if (addContactForm.get('email')?.errors?.['required']) {
                <div>Email is required.</div>
              }
              @if (addContactForm.get('email')?.errors?.['email']) {
                <div>Please enter a valid email address.</div>
              }
            </div>
          }
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700"
            >Phone <span class="text-red-600">*</span></label
          >
          <input
            type="tel"
            formControlName="phone"
            class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            aria-required="true"
            aria-label="Phone"
          />
          @if (addContactForm.get('phone')?.touched && addContactForm.get('phone')?.invalid) {
            <div class="text-sm text-red-600 mt-1">
              <div>Phone is required.</div>
              <!-- TODO: handle pattern validation for phone number with min length and / or max length-->
              <div>Please enter a valid phone number.</div>
            </div>
          }
        </div>

        <div class="pt-4">
          <button
            type="submit"
            class="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md disabled:opacity-50"
          >
            ADD CONTACT
          </button>
        </div>
      </form>

      @if (isSaved) {
        <div
          role="status"
          aria-live="polite"
          class="mt-4 rounded-md bg-green-50 border border-green-200 px-4 py-3 text-green-800 shadow-sm flex items-start gap-3"
        >
          <div>
            <p class="font-medium">Success</p>
            <p class="text-sm">Contact added successfully.</p>
          </div>
        </div>
      }

      <div
        role="alert"
        aria-live="assertive"
        class="mt-3 rounded-md bg-red-50 border border-red-200 px-4 py-3 text-red-800 flex items-start gap-3"
      >
        <div>
          <p class="font-medium">Error</p>
          <p class="text-sm">Unable to Add Contact. Please try again later.</p>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class AddContact {
  // Step 1: Have the HTML form equivalent in TS
  addContactForm!: FormGroup;
  isSaved = false;

  constructor(private contactService: ContactService) {
    // step 1 continues...
    this.addContactForm = new FormGroup({
      // step 2: Have the HTML input equivalents in TS
      name: new FormControl('', Validators.required), // Implementing validation for name field
      email: new FormControl('', [Validators.required, Validators.email]), // Implementing validation for email field
      phone: new FormControl('', Validators.required),
    });
  }

  handleAddContact() {
    // collect the submittable form data
    console.log(this.addContactForm.value);

    // 1. send the form data to the service
    this.contactService.addContact(this.addContactForm.value).subscribe((response: any) => {
      // 2. receive the response from the service
      console.log('Contact added successfully', response);
      this.isSaved = true;
    });
  }
}
