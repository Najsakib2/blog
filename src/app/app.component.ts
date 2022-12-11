import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'style Binding';
  user = ['sakib', 'nazil', 'rakib', 'nafis'];
  bgColor = 'red';
  ok = 'orange';
  updateColor() {
    this.ok = 'red';
    this.bgColor = 'blue';
  }
}
