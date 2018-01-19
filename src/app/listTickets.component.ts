import {Component, OnInit} from '@angular/core';
import {Ticket} from './ticket';

@Component({
  selector: 'app-new',
  template: `
    <div align="left" style="border:1px solid black" class="large">
      <div align="center"><label> Title:</label><input type="text" [(ngModel)]="newTicket.title"/></div><br/>
      <label>Assigned to:</label><input type="text" [(ngModel)]="newTicket.assignedTo"/>
      <label>Completed%:</label><input type="number" class="champ" [(ngModel)]="newTicket.doing"/><br/>
      <textarea [(ngModel)]="newTicket.description"></textarea><br/>
      <div align="center"><button (click)="ajouter()">Save</button></div>
    </div>
    <div *ngFor='let ticket of resultat ; let i = index' align="center" style="border:1px solid black" class="large">
        <h1>{{ticket.title}} -- {{ticket.assignedTo}}</h1>
        <div *ngIf="shows" align="center" >
          <h4>id  {{ticket.id}}</h4>
          <h4>Doing  {{ticket.doing}}%</h4>
          <h4>Description  {{ticket.description}}</h4>
        </div>
         <button (click)="supprimer(i)">Cancel</button> <button (click)="show()">Details</button>
    </div>`,
  styleUrls: ['./app.component.css'],
})
export class ListTicketsComponent implements OnInit {
  constructor() {
    this.shows = false;
  }

  private tickets = [];
  newTicket: any = new Ticket();
  resultat: Ticket[];
  shows: boolean;

  ngOnInit() {
      this.resultat = this.tickets;
      console.log(this.resultat);
    }
  ajouter() {
      this.tickets.push(this.newTicket);
      this.newTicket = new Ticket();
    }
  show() {
    if (this.shows === true) {
      this.shows = false;
    } else { this.shows = true; }
  }
  supprimer(id) {
    this.tickets.splice(id , 1);
  }

}
