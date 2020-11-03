import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';
import { BackendService } from '../backend.service';
import { loadTickets, loadUsers } from '../ngrx/loading.actions';
import { IState } from '../ngrx/loading.reducer';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {

  public searchId: string;

  tickets$: Observable<Ticket[]> = this.store.select(state => state.loadingData.tickets);
  users$: Observable<User[]> = this.store.select(state => state.loadingData.users);

  constructor(private store: Store<{ loadingData: IState }>) { }

  ngOnInit() {
    this.store.dispatch({ type: loadTickets.type });
    this.store.dispatch({ type: loadUsers.type });
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
