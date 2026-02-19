import { Component } from '@angular/core';
import { MenuList } from '../menu-list/menu-list';

@Component({
  selector: 'app-footer',
  imports: [MenuList],
  template: `
    <footer class="text-center mt-5 bg-gray-600">
      <hr />
      <div class="flex justify-center mt-5">
        <app-menu-list></app-menu-list>
      </div>
      <p class="copyright-text">Copyright 2024 | Arun</p>
    </footer>
  `,
  styles: `
    .copyright-text {
      color: #fff;
      font-size: 12px;
      padding: 16px;
    }
  `,
})
export class Footer {}
