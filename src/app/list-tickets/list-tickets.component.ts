import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent {

  public readonly usersAndTickets$ = forkJoin([this.backendService.users(), this.backendService.tickets()]).pipe(
    map(([users, tickets]) => ({
      users: users,
      tickets: tickets
    }))
  );

  constructor(private readonly backendService: BackendService) { }

  changeTicketCompletion(ticketId: number, completed: boolean) {
    this.backendService.complete(ticketId, completed).toPromise();
  }

  changeTicketAssignee(ticketId: number, userId: number) {
    this.backendService.assign(ticketId, userId).toPromise();
  }

  addTicket(description: string) {
    this.backendService.newTicket({ description: description }).toPromise();
  }

}
