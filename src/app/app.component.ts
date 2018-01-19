import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button><a [routerLink]="['/new']" >Add New Ticket</a></button>
  <a [routerLink]="['/new']" >Ticket Managing</a>
  ********<a [routerLink]="['/arc']" >Archive 2016</a>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
}
