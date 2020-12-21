import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as TicketActions from 'src/app/ngrx/ticket/ticket.actions';
import * as UserActions from 'src/app/ngrx/user/user.actions';
import { Ticket } from 'src/model/ticket.interface';
import { User } from 'src/model/user.interface';
import { DataState, selectTicketById, selectTicketError, selectUserByAssigneeId } from '../../ngrx/data.reducer';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {

  public ticket$: Observable<Ticket>;
  public user$: Observable<User>;
  public error$: Observable<String>;

  constructor(private readonly route: ActivatedRoute, private store: Store<DataState>) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.store.dispatch(TicketActions.startFindTicket({ id }));
    this.store.dispatch(UserActions.startLoadUsers());
    this.ticket$ = this.store.select(selectTicketById, id).pipe(
      map((selectTicket) => {
        if (selectTicket) {
          this.user$ = this.store.select(selectUserByAssigneeId, selectTicket.assigneeId);
        }
        return selectTicket;
      })
    );
    this.error$ = this.store.select(selectTicketError);
  }
}
