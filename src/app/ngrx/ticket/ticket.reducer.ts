import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { CallState } from 'src/model/call-state.type';
import { LoadingState } from 'src/model/loading-state.enum';
import { Ticket } from 'src/model/ticket.interface';
import * as TicketActions from './ticket.actions';

export interface TicketState extends EntityState<Ticket> {
    // additional entities state properties
    callState: CallState
}

export const ticketAdapter: EntityAdapter<Ticket> = createEntityAdapter<Ticket>();

export const ticketInitialState: TicketState = ticketAdapter.getInitialState({
    // additional entity state properties
    callState: LoadingState.INIT
});

const userReducer = createReducer(
    ticketInitialState,

    on(TicketActions.failedTicket, (state, { error }) => {
        return {
            ...state,
            isLoading: false,
            callState: { errorMsg: error }
        }
    }),

    on(TicketActions.startLoadTickets, (state) => {
        return {
            ...state,
            callState: LoadingState.LOADING
        }
    }),
    on(TicketActions.loadTickets, (state, { tickets }) => {
        return ticketAdapter.setAll(tickets, {
            ...state,
            callState: LoadingState.LOADED
        })
    }),

    on(TicketActions.startAssignTicket, (state, { ticketId, userId }) => {
        return {
            ...state,
            callState: LoadingState.LOADING
        }
    }),
    on(TicketActions.assignTicket, (state, { ticket }) => {
        return ticketAdapter.setOne(ticket, {
            ...state,
            callState: LoadingState.LOADED
        })
    }),

    on(TicketActions.startCompletTicket, (state, { ticketId, completed }) => {
        return {
            ...state,
            callState: LoadingState.LOADING
        }
    }),
    on(TicketActions.completTicket, (state, { ticket }) => {
        return ticketAdapter.setOne(ticket, {
            ...state,
            callState: LoadingState.LOADED
        })
    }),

    on(TicketActions.startAddTicket, (state, { description }) => {
        return {
            ...state,
            callState: LoadingState.LOADING
        }
    }),
    on(TicketActions.addTicket, (state, { ticket }) => {
        return ticketAdapter.addOne(ticket, {
            ...state,
            callState: LoadingState.LOADED
        })
    }),

    on(TicketActions.startFindTicket, (state, { id }) => {
        return {
            ...state,
            callState: LoadingState.LOADING
        }
    }),
    on(TicketActions.findTicket, (state, { ticket }) => {
        return ticketAdapter.setOne(ticket, {
            ...state,
            callState: LoadingState.LOADED
        })
    }),
);

export function reducer(state: TicketState | undefined, action: Action) {
    return userReducer(state, action);
}

// get the selectors
export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = ticketAdapter.getSelectors();
