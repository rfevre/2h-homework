import { createAction, props } from '@ngrx/store';
import { Ticket } from 'src/interfaces/ticket.interface';

export const startLoadTickets = createAction('[Ticket/API] Start Load Tickets');
export const loadTickets = createAction('[Ticket/API] Load Tickets', props<{ tickets: Ticket[] }>());
