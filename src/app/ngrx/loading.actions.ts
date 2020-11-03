import { createAction, props } from '@ngrx/store';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';

export const loadTickets = createAction('[Loading Backend] Load Tickets Start');
export const loadTicketsEnd = createAction('[Loading Backend] Load Tickets End', props<{ payload: Ticket[]}>());

export const loadUsers = createAction('[Loading Backend] Load Users Start');
export const loadUsersEnd = createAction('[Loading Backend] Load Users End', props<{ payload: User[]}>());