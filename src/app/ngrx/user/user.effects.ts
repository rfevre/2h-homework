import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BackendService } from '../../backend.service';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {

    @Effect()
    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.startLoadUsers),
        mergeMap(() => this.backendService.users()
            .pipe(
                map(users => UserActions.loadUsers({ users })),
                catchError(() => EMPTY)
            ))
    ));

    constructor(
        private actions$: Actions,
        private backendService: BackendService
    ) { }
}