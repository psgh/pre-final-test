import { Component } from '@angular/core';
import { cats } from './model/Cat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pre-final-test';
  cats = cats;
}
