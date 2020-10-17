import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {

  public ticket: Ticket;
  public user$: Observable<User>;

  constructor(private readonly backendService: BackendService, private readonly route: ActivatedRoute) { }

  /* TODO catch error et pas d'id */

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.backendService.ticket(id).subscribe(result => {
        this.ticket = result;
        this.user$ = this.backendService.user(result.assigneeId);
      });
    });
  }

  getCurrentlyTicketAssigneeUser(userId: number): Promise<User> {
    return this.backendService.user(userId).toPromise();
  }
}
