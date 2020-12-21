import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, createSelector, on } from '@ngrx/store';
import { CallState } from 'src/model/call-state.type';
import { LoadingState } from 'src/model/loading-state.enum';
import { User } from 'src/model/user.interface';
import * as UserActions from './user.actions';

export interface UserState extends EntityState<User> {
    // additional entities state properties
    callState: CallState
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const userInitialState: UserState = userAdapter.getInitialState({
    // additional entity state properties
    callState: LoadingState.INIT,
});

const userReducer = createReducer(
    userInitialState,
    on(UserActions.startLoadUsers, (state) => {
        return {
            ...state,
            callState: LoadingState.LOADING
        }
    }),
    on(UserActions.loadUsers, (state, { users }) => {
        return userAdapter.setAll(users, {
            ...state,
            callState: LoadingState.LOADED
        })
    }),
);

export function reducer(state: UserState | undefined, action: Action) {
    return userReducer(state, action);
}

// get the selectors
export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = userAdapter.getSelectors();
