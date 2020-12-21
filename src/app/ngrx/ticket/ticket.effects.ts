import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BackendService } from '../../backend.service';
import * as TicketActions from './ticket.actions';

@Injectable()
export class TicketEffects {

    loadTickets$ = createEffect(() => this.actions$.pipe(
        ofType(TicketActions.startLoadTickets),
        mergeMap(() => this.backendService.tickets()
            .pipe(
                map(tickets => TicketActions.loadTickets({ tickets })),
                catchError(() => of(TicketActions.failedTicket({ error : 'Erreur lors du chargement des tickets' })))
            ))
    ));

    assignTicket$ = createEffect(() => this.actions$.pipe(
        ofType(TicketActions.startAssignTicket),
        mergeMap(({ ticketId, userId }) => this.backendService.assign(ticketId, userId)
            .pipe(
                map(ticket => TicketActions.assignTicket({ ticket })),
                catchError(() => of(TicketActions.failedTicket({ error : 'Erreur lors de l\'assignement du ticket' })))
            ))
    ));

    completTicket$ = createEffect(() => this.actions$.pipe(
        ofType(TicketActions.startCompletTicket),
        mergeMap(({ ticketId, completed }) => this.backendService.complete(ticketId, completed)
            .pipe(
                map(ticket => TicketActions.completTicket({ ticket })),
                catchError(() => of(TicketActions.failedTicket({ error : 'Erreur lors de la completion du ticket' })))
            ))
    ));

    addTicket$ = createEffect(() => this.actions$.pipe(
        ofType(TicketActions.startAddTicket),
        mergeMap(({ description }) => this.backendService.newTicket({ description })
            .pipe(
                map(ticket => TicketActions.addTicket({ ticket })),
                catchError(() => of(TicketActions.failedTicket({ error : 'Erreur lors de l\'ajout du ticket' })))
            ))
    ));

    findTicket$ = createEffect(() => this.actions$.pipe(
        ofType(TicketActions.startFindTicket),
        mergeMap(({ id }) => {
            return this.backendService.ticket(id)
                .pipe(
                    map(ticket => {
                        return ticket ? TicketActions.findTicket({ ticket }) : TicketActions.failedTicket({ error : 'Impossible de trouver le ticket' });
                    }),
                    catchError(() => of(TicketActions.failedTicket({ error : 'Erreur lors de la recherche du ticket' })))
                )
        })
    ));


    constructor(
        private actions$: Actions,
        private backendService: BackendService
    ) { }
}