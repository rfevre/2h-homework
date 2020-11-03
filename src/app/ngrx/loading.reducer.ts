import { createReducer, on } from '@ngrx/store';
import { Ticket } from 'src/interfaces/ticket.interface';
import { User } from 'src/interfaces/user.interface';
import { loadTickets, loadTicketsEnd, loadUsers, loadUsersEnd } from './loading.actions';
 
export interface IState {
  nbrOfLoading: number, 
  tickets?: Ticket[], 
  users?: User[]
}

export const initialState: IState = { nbrOfLoading: 0 };
 
const _loadingReducer = createReducer(
  initialState,

  on(loadTickets, (state) => {
    return ({ ...state, nbrOfLoading: state.nbrOfLoading + 1 })
  }),
  on(loadTicketsEnd, (state, action) => {
    return ({ ...state, tickets: action.payload, nbrOfLoading: state.nbrOfLoading - 1})
  }),

  on(loadUsers, (state) => {
    return ({ ...state, nbrOfLoading: state.nbrOfLoading + 1 })
  }),
  on(loadUsersEnd, (state, action) => {
    return ({ ...state, users: action.payload, nbrOfLoading: state.nbrOfLoading - 1})
  })

);
 
export function loadingReducer(state, action) {
  return _loadingReducer(state, action);
}