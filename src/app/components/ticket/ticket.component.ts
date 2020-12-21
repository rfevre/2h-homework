import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Ticket } from 'src/model/ticket.interface';
import { User } from 'src/model/user.interface';
import { DataState, selectAllUsers, selectUserByAssigneeId } from '../../ngrx/data.reducer';
import * as TicketActions from '../../ngrx/ticket/ticket.actions';

interface TicketData {
  users: User[],
  currentlyAssigneeUser: User
}

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @Input()
  public ticket: Ticket;

  public data$: Observable<TicketData>;

  constructor(private store: Store<DataState>) { }

  ngOnInit(): void {
    const currentlyAssigneeUser$: Observable<User> = this.store.select(selectUserByAssigneeId, this.ticket.assigneeId);
    const users$: Observable<User[]> = this.store.select(selectAllUsers);

    this.data$ = combineLatest([users$, currentlyAssigneeUser$])
      .pipe(
        map(([users, currentlyAssigneeUser]) => {
          return {
            users,
            currentlyAssigneeUser
          }
        })
      );
  }

  changeTicketCompletion() {
    this.store.dispatch(TicketActions.startCompletTicket({ ticketId: this.ticket.id, completed: !this.ticket.completed }))
  }

  selectOnChange(userId: number) {
    this.store.dispatch(TicketActions.startAssignTicket({ ticketId: this.ticket.id, userId: userId }))
  }

}
