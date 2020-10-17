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

  getTicketAssigneeUser(ticket: Ticket, users: User[]) {
    return users.find((user: User) => user.id === +ticket.assigneeId);
  }
}
