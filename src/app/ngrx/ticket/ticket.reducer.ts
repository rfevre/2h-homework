import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Ticket } from 'src/interfaces/ticket.interface';
import * as TicketActions from './ticket.actions';

export interface TicketState extends EntityState<Ticket> {
    // additional entities state properties
    isLoading: boolean;
}

export const ticketAdapter: EntityAdapter<Ticket> = createEntityAdapter<Ticket>();

export const ticketInitialState: TicketState = ticketAdapter.getInitialState({
    // additional entity state properties
    isLoading: false,
});

const userReducer = createReducer(
    ticketInitialState,
    on(TicketActions.startLoadTickets, (state) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(TicketActions.loadTickets, (state, { tickets }) => {
        return ticketAdapter.setAll(tickets, {
            ...state,
            isLoading: false
        })
    }),
);

export function reducer(state: TicketState | undefined, action: Action) {
    return userReducer(state, action);
}

// get the selectors
const {
    selectEntities,
    selectAll,
} = ticketAdapter.getSelectors();

// select the dictionary of ticket entities
export const selectTicketEntities = selectEntities;

// select the array of tickets
export const selectAllTickets = selectAll;
