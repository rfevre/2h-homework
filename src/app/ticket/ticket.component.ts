import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @Input()
  public readonly ticket: Ticket;

  @Input()
  public readonly user: User;

  constructor() { }

  ngOnInit(): void {
  }

}
