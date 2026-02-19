import { Component } from '@angular/core';
import { MenuList } from '../menu-list/menu-list';

@Component({
  selector: 'app-header',
  imports: [MenuList],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
