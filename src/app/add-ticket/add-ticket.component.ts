import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent {

  @Input()
  public readonly users: User[];

  @Output()
  public addTicketEvent = new EventEmitter<string>();

  public descriptionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.descriptionForm = this.formBuilder.group({
      description: ''
    });
  }

  submitTicket(descriptionFormValue: string) {
    this.addTicketEvent.emit(descriptionFormValue['description']);
  }

}
