import { Component } from '@angular/core';
import {Ticket} from './ticket';
import {TicketsService} from './tickets.service';


@Component({
  selector: 'app-archive',
  template: `
    <table class="table">
      <tr>
        <th>id</th>
        <th>Title</th>
        <th>Assigned To</th>
        <th>%</th>
        <th>Description</th>
      </tr>
      <tr *ngFor="let item of data">
        <td>{{item.id}}</td>
        <td>{{item.title}}</td>
        <td>{{item.assignedTo}}</td>
        <td>{{item.doing}}</td>
        <td>{{item.description}}</td>
      </tr>
    </table>`,
  styleUrls: ['./app.component.css'],
})
export class ArchiveComponent {
  data: any;
  PostId: string;
  SinglePost: any;
  constructor(private MyService: TicketsService) {
    this.MyService.GetPost().subscribe( posts => {this.data = posts; });
    this.PostId = '0';
    this.SinglePost = {
      id: '',
      title: '',
      assignedTo: '',
      doing: '',
      description: ''
    };
  }
  GetPost() {
    this.MyService.GetPostAsPerId(this.PostId).subscribe(post => { this.SinglePost = post; });
  }
}

