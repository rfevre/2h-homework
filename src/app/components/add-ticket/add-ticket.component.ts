import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TicketActions from 'src/app/ngrx/ticket/ticket.actions';
import { User } from 'src/model/user.interface';
import { DataState, selectAllUsers } from '../../ngrx/data.reducer';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent {

  public descriptionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<DataState>) {
    this.descriptionForm = this.formBuilder.group({
      description: ''
    });
  }

  submitTicket(description: any) {
    this.store.dispatch(TicketActions.startAddTicket(description));
  }

}
