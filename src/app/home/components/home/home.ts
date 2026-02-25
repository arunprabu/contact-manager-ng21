import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<div class="container">
    <h1 i18n>Welcome to our app</h1>
    <p i18n>Some description here</p>
    <button i18n>Click me</button>
    <!-- if you use images you can annotate attributes like titles -->
    <!-- <img src="logo.png" i18n-title title="Logo title" /> -->
  </div>`,
  styles: [],
})
export class Home implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
