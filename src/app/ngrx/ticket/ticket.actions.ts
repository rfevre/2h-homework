import { createAction, props } from '@ngrx/store';
import { Ticket } from 'src/model/ticket.interface';

export const startLoadTickets = createAction('[Ticket/API] Start Load Tickets');
export const loadTickets = createAction('[Ticket/API] Load Tickets', props<{ tickets: Ticket[] }>());

export const startAssignTicket = createAction('[Ticket/API] Start Assign Ticket', props<{ ticketId: number, userId: number }>());
export const assignTicket = createAction('[Ticket/API] Assign Ticket', props<{ ticket: Ticket }>());

export const startCompletTicket = createAction('[Ticket/API] Start Complet Ticket', props<{ ticketId: number, completed: boolean }>());
export const completTicket = createAction('[Ticket/API] Complet Ticket', props<{ ticket: Ticket }>());

export const startAddTicket = createAction('[Ticket/API] Start Add Ticket', props<{ description: string }>());
export const addTicket = createAction('[Ticket/API] Add Ticket', props<{ ticket: Ticket }>());

export const startFindTicket = createAction('[Ticket/API] Start Find Ticket', props<{ id: number }>());
export const findTicket = createAction('[Ticket/API] Find Ticket', props<{ ticket: Ticket }>());

export const failedTicket = createAction('[Ticket/API] Failed Ticket', props<{ error: any }>());