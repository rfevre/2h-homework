import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BackendService } from '../../backend.service';
import * as TicketActions from './ticket.actions';

@Injectable()
export class TicketEffects {

    @Effect()
    loadTickets$ = createEffect(() => this.actions$.pipe(
        ofType(TicketActions.startLoadTickets),
        mergeMap(() => this.backendService.tickets()
            .pipe(
                map(tickets => TicketActions.loadTickets({ tickets })),
                catchError(() => EMPTY)
            ))
    ));

    constructor(
        private actions$: Actions,
        private backendService: BackendService
    ) { }
}