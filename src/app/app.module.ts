import { BrowserModule,  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {ListTicketsComponent} from './listTickets.component';
import {TicketComponent} from './ticket.component';
import {FormsModule} from '@angular/forms';
import {TicketsService} from './tickets.service';
import {ArchiveComponent} from './archive.component';
import {HttpModule} from '@angular/http';


const appRoutes: Routes = [
  { path: 'new', component: ListTicketsComponent },
  { path: 'arc', component: ArchiveComponent }];

@NgModule({
  declarations: [
    AppComponent, ListTicketsComponent, TicketComponent, ArchiveComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule. forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [TicketsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
