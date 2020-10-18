import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {

  public ticket$: Observable<Ticket>;
  public user$: Observable<User>;
  public error: String;

  constructor(private readonly backendService: BackendService, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.ticket$ = this.backendService.ticket(id).pipe(
        tap((ticket: Ticket) => {
          if (ticket) {
            if (ticket.assigneeId) {
              this.user$ = this.backendService.user(ticket.assigneeId);
            } else {
              this.user$ = of({
                id: null,
                name: ''
              });
            }
          } else {
            this.error = "ticket not found";
          }
        })
      );
    });
  }
}
