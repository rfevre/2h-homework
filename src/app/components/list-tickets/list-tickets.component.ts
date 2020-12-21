import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataState, selectAllTickets } from 'src/app/ngrx/data.reducer';
import * as TicketActions from 'src/app/ngrx/ticket/ticket.actions';
import * as UserActions from 'src/app/ngrx/user/user.actions';
import { Ticket } from 'src/model/ticket.interface';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {

  public searchId: string;

  public tickets$: Observable<Ticket[]>;

  constructor(private store: Store<DataState>) { }

  ngOnInit() {
    this.store.dispatch(TicketActions.startLoadTickets());
    this.store.dispatch(UserActions.startLoadUsers());

    this.tickets$ = this.store.select(selectAllTickets);
  }

}
