import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { EllipsisPipe } from '../../../shared/pipes/ellipsis-pipe';

@Component({
  selector: 'app-about',
  imports: [UpperCasePipe, LowerCasePipe, DatePipe, EllipsisPipe],
  template: `
    <h1>Pipes | Transform data in the template</h1>
    <ul>
      <li>
        Without Pipe: <br />
        {{ randomText }}
      </li>
      <li>Without Uppercase Pipe: <br />{{ randomText | uppercase }}</li>
      <li>Without lowercase Pipe: <br />{{ randomText | lowercase }}</li>
    </ul>

    <hr />
    <h2>Date Pipe</h2>
    <p>Without Date Pipe: <br />{{ today }}</p>
    <p>With Date Pipe: <br />{{ today | date }}</p>
    <p>With Date Pipe: <br />{{ today | date: 'shortDate' }}</p>
    <p>With Date Pipe: <br />{{ today | date: 'dd/MM/yyyy hh:mm:ss a' }}</p>

    <hr />
    <h2>Custom Pipe | Ellipsis Pipe</h2>
    <p>Without Ellipsis Pipe: <br />{{ randomText }}</p>
    <p>With Ellipsis Pipe: <br />{{ randomText | ellipsis }}</p>
    <p>With Ellipsis Pipe (30 chars): <br />{{ randomText | ellipsis: 30 }}</p>
    <p>With Ellipsis Pipe (50 chars): <br />{{ randomText | ellipsis: 50 }}</p>
  `,
  styles: ``,
})
export class About {
  randomText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.';

  today = new Date();
}
