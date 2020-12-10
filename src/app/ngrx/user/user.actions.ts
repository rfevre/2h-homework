import { createAction, props } from '@ngrx/store';
import { User } from 'src/interfaces/user.interface';

export const startLoadUsers = createAction('[User/API] Start Load Users');
export const loadUsers = createAction('[User/API] Load Users', props<{ users: User[] }>());
