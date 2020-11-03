import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BackendService } from '../backend.service';
import { loadTickets, loadTicketsEnd, loadUsers, loadUsersEnd } from './loading.actions';

@Injectable()
export class LoadingEffects {

    @Effect()
    loadTickets$ = createEffect(() => this.actions$.pipe(
        ofType(loadTickets),
        mergeMap(() => this.backendService.tickets()
            .pipe(
                map(tickets => loadTicketsEnd({ payload: tickets })),
                catchError(() => of(loadTicketsEnd({ payload: [] })))
            ))
    ));

    @Effect()
    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType(loadUsers),
        mergeMap(() => this.backendService.users()
            .pipe(
                map(users => loadUsersEnd({ payload: users })),
                catchError(() => of(loadUsersEnd({ payload: [] })))
            ))
    ));

    constructor(
        private actions$: Actions,
        private backendService: BackendService
    ) { }
}