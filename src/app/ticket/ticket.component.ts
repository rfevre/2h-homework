import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @Input()
  public ticket: Ticket;

  @Input()
  public users: User[];

  @Output()
  public changeTicketCompletionEvent = new EventEmitter<boolean>();

  @Output()
  public changeTicketAssigneeEvent = new EventEmitter<number>();

  public currentlyAssigneeUser: User;

  constructor() { }

  ngOnInit(): void {
    this.currentlyAssigneeUser = this.getCurrentlyTicketAssigneeUser();
  }

  getCurrentlyTicketAssigneeUser() {
    return this.users ? this.users.find((user: User) => user.id === +this.ticket.assigneeId) : null;
  }

  changeTicketCompletion() {
    this.changeTicketCompletionEvent.emit(!this.ticket.completed);
  }

  selectOnChange(userId: number) {
    this.changeTicketAssigneeEvent.emit(userId);
  }

}
