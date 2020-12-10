import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataState, selectAllTickets, selectAllUsers } from 'src/app/ngrx/data.reducer';
import * as TicketActions from 'src/app/ngrx/ticket/ticket.actions';
import * as UserActions from 'src/app/ngrx/user/user.actions';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';

interface ListTicketsData {
  tickets: Ticket[],
  users: User[]
}

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {

  public searchId: string;

  data$: Observable<ListTicketsData>;

  constructor(private store: Store<DataState>) { }

  ngOnInit() {
    this.store.dispatch(TicketActions.startLoadTickets());
    this.store.dispatch(UserActions.startLoadUsers());

    const tickets$: Observable<Ticket[]> = this.store.select(selectAllTickets);
    const users$: Observable<User[]> = this.store.select(selectAllUsers);

    this.data$ = combineLatest([tickets$, users$])
      .pipe(
        map(([tickets, users]) => {
          return {
            tickets,
            users
          }
        })
      );
  }

  changeTicketCompletion(ticketId: number, completed: boolean) {
    //this.backendService.complete(ticketId, completed).toPromise();
  }

  changeTicketAssignee(ticketId: number, userId: number) {
    //this.backendService.assign(ticketId, userId).toPromise();
  }

  addTicket(description: string) {
    //this.backendService.newTicket({ description: description }).toPromise();
  }

}
