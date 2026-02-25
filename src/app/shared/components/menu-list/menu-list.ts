import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="hidden sm:ml-6 sm:block">
      <div class="flex space-x-4">
        <a
          routerLink="/"
          aria-current="page"
          routerLinkActive="bg-gray-950/50 text-white"
          [routerLinkActiveOptions]="{ exact: true }"
          class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >Home</a
        >
        <a
          routerLink="/concepts"
          routerLinkActive="bg-gray-950/50 text-white"
          class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >Concepts</a
        >
        <a
          routerLink="/contacts"
          routerLinkActive="bg-gray-950/50 text-white"
          class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >Contact Manager</a
        >
        <a
          routerLink="/about"
          routerLinkActive="bg-gray-950/50 text-white"
          class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >About</a
        >
        <a
          routerLink="/counter"
          routerLinkActive="bg-gray-950/50 text-white"
          class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >Counter</a
        >
        <a
          routerLink="/messenger"
          routerLinkActive="bg-gray-950/50 text-white"
          class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >Messenger</a
        >
        <a
          routerLink="/auth/login"
          routerLinkActive="bg-gray-950/50 text-white"
          class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >Login</a
        >

        <button class="text-sm text-red-300 hover:text-red-500">Logout</button>
      </div>
    </div>
  `,
  styles: ``,
})
export class MenuList {}
