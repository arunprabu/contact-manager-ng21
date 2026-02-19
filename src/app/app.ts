import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';

// Decorators
@Component({
  selector: 'app-root', // component is usable via selector 'app-root' in html (must)
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html', // html (must)
  styleUrls: ['./app.css'], // css (optional)
})
export class App {
  // ts
  protected readonly title = signal('contact-manager-ng21-app');
}
