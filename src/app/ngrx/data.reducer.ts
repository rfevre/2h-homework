import { ActionReducerMap, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { getError } from 'src/model/call-state.type';
import { LoadingState } from 'src/model/loading-state.enum';
import { Ticket } from 'src/model/ticket.interface';
import { User } from 'src/model/user.interface';
import * as fromTicket from './ticket/ticket.reducer';
import * as fromUser from './user/user.reducer';

export interface DataState {
  users: fromUser.UserState;
  tickets: fromTicket.TicketState;
}

export const selectUserState = createFeatureSelector<fromUser.UserState>('users');
export const selectAllUsers = createSelector(
  selectUserState,
  fromUser.selectAll
);
export const selectUserEntities = createSelector(
  selectUserState,
  fromUser.selectEntities
);
export const selectUserByAssigneeId = createSelector(
  selectUserState,
  (userState: fromUser.UserState, assigneeId: number) => {
    const result = Object.values(userState.entities).filter((user: User) => user.id === assigneeId);
    return result ? result[0] : null;
  }
);

export const selectTicketState = createFeatureSelector<fromTicket.TicketState>('tickets');
export const selectAllTickets = createSelector(
  selectTicketState,
  fromTicket.selectAll
);
export const selectTicketEntities = createSelector(
  selectTicketState,
  fromTicket.selectEntities
);
export const selectTicketIds = createSelector(
  selectTicketState,
  fromTicket.selectIds
);
export const selectTicketById = createSelector(
  selectTicketState,
  (ticketState: fromTicket.TicketState, ticketId: number) => {
    return Object.values(ticketState.entities).filter((ticket: Ticket) => ticket.id === ticketId)[0]
  }
);
export const selectTicketError = createSelector(
  selectTicketState,
  (state: fromTicket.TicketState) => getError(state.callState)
);


export const appIsLoading = createSelector(
  selectTicketState,
  selectUserState,
  (stateTicket: fromTicket.TicketState, stateUser: fromUser.UserState) => stateTicket.callState === LoadingState.LOADING || stateUser.callState === LoadingState.LOADING
);

export const dataReducers: ActionReducerMap<DataState> = {
  users: fromUser.reducer,
  tickets: fromTicket.reducer
};
