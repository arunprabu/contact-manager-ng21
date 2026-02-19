import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [UpperCasePipe],
  template: `
    <p>about works!</p>
    <p>
      {{ randomText | uppercase }}
    </p>
  `,
  styles: ``,
})
export class About {
  randomText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.';
}
