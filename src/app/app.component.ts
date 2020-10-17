import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public readonly usersAndTickets$ = combineLatest([this.backendService.users(), this.backendService.tickets()]).pipe(
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
}
