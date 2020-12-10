import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, createSelector, on } from '@ngrx/store';
import { User } from 'src/interfaces/user.interface';
import * as UserActions from './user.actions';

export interface UserState extends EntityState<User> {
    // additional entities state properties
    isLoading: boolean;
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const userInitialState: UserState = userAdapter.getInitialState({
    // additional entity state properties
    isLoading: false,
});

const userReducer = createReducer(
    userInitialState,
    on(UserActions.startLoadUsers, (state) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(UserActions.loadUsers, (state, { users }) => {
        return userAdapter.setAll(users, {
            ...state,
            isLoading: false
        })
    }),
);

export function reducer(state: UserState | undefined, action: Action) {
    return userReducer(state, action);
}

// get the selectors
const {
    selectEntities,
    selectAll,
} = userAdapter.getSelectors();

// select the dictionary of user entities
export const selectUserEntities = selectEntities;

// select the array of users
export const selectAllUsers = selectAll;
