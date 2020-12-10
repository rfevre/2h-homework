import { ActionReducerMap, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { User } from 'src/interfaces/user.interface';
import * as fromTicket from './ticket/ticket.reducer';
import * as fromUser from './user/user.reducer';

export interface DataState {
  users: fromUser.UserState;
  tickets: fromTicket.TicketState;
}

export const selectUserState = createFeatureSelector<fromUser.UserState>('users');
export const selectAllUsers = createSelector(
  selectUserState,
  fromUser.selectAllUsers
);
export const selectUserEntities = createSelector(
  selectUserState,
  fromUser.selectUserEntities
);
export const selectUserByAssigneeId = createSelector(
  selectUserState,
  (userState: fromUser.UserState, assigneeId: number) => {
    return Object.values(userState.entities).filter((user: User) => user.id === assigneeId)[0]
  }
);

export const selectTicketState = createFeatureSelector<fromTicket.TicketState>('tickets');
export const selectAllTickets = createSelector(
  selectTicketState,
  fromTicket.selectAllTickets
);
export const selectTicketEntities = createSelector(
  selectTicketState,
  fromTicket.selectTicketEntities
);

export const dataReducers: ActionReducerMap<DataState> = {
  users: fromUser.reducer,
  tickets: fromTicket.reducer
};
