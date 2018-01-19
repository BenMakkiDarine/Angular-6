import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TicketsService {
  constructor(private http: Http) {
  }
  GetPost() {
    return this.http.get('assets/tickets.json').map(result => result.json());
  }

  GetPostAsPerId(Id: any) {
    return this.http.get('assets/tickets.json' + Id).map(result => result.json());
  }
}

