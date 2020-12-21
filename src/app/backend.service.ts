import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Ticket } from '../model/ticket.interface';
import { User } from '../model/user.interface';

/**
 * This service acts as a mock back-end.
 * It has some intentional errors that you might have to fix.
 */

function randomDelay() {
    return Math.random() * 4000;
}

@Injectable()
export class BackendService {

    constructor() { }

    public storedTickets: Ticket[] = [
        {
            id: 0,
            completed: false,
            assigneeId: 111,
            description: 'Install a monitor arm'
        },
        {
            id: 1,
            completed: false,
            assigneeId: 222,
            description: 'Move the desk to the new location'
        }
    ];

    public storedUsers: User[] = [{ id: 111, name: 'Agathe Feeling' }, { id: 222, name: 'Jack Ouzi' }];

    private lastId: number = 1;

    private findUserById = id => this.storedUsers.find((user: User) => user.id === +id);
    private findTicketById = id => this.storedTickets.find((ticket: Ticket) => ticket.id === +id);

    public tickets(): Observable<Ticket[]> {
        return of(this.storedTickets).pipe(delay(randomDelay()));
    }

    public ticket(id: number): Observable<Ticket> {
        return of(this.findTicketById(id)).pipe(delay(randomDelay()));
    }

    public users(): Observable<User[]> {
        return of(this.storedUsers).pipe(delay(randomDelay()));
    }

    public user(id: number): Observable<User> {
        return of(this.findUserById(id)).pipe(delay(randomDelay()));
    }

    public newTicket(payload: { description: string }): Observable<Ticket> {
        
        const newTicket: Ticket = {
            id: ++this.lastId,
            completed: false,
            assigneeId: null,
            description: payload.description
        };

        return of(newTicket).pipe(
            delay(randomDelay()),
            tap((ticket: Ticket) => {
                const storedTicketsClone = Object.assign([], this.storedTickets);
                storedTicketsClone.push(ticket);
                this.storedTickets = storedTicketsClone;
            })
        );
    }

    public assign(ticketId: number, userId: number): Observable<Ticket> {
        const user = this.findUserById(+userId);
        const foundTicket = this.findTicketById(+ticketId);

        if (foundTicket && user) {
            const result: Ticket = Object.assign({}, foundTicket);
            return of(result).pipe(
                delay(randomDelay()),
                tap((ticket: Ticket) => {
                    ticket.assigneeId = +userId;
                    const storedTicketsClone = Object.assign([], this.storedTickets);
                    const index = storedTicketsClone.findIndex(ticketFind => ticketFind.id === ticket.id);
                    if (index > -1) {
                        storedTicketsClone.splice(index, 1);
                        storedTicketsClone.push(ticket)
                    }
                    this.storedTickets = storedTicketsClone;
                })
            );
        }
        return throwError(new Error('ticket or user not found'));
    }

    public complete(ticketId: number, completed: boolean): Observable<Ticket> {
        const foundTicket = this.findTicketById(+ticketId);

        if (foundTicket) {
            const result: Ticket = Object.assign({}, foundTicket);
            return of(result).pipe(
                delay(randomDelay()),
                tap((ticket: Ticket) => {
                    ticket.completed = completed;
                    const storedTicketsClone = Object.assign([], this.storedTickets);
                    const index = storedTicketsClone.findIndex(ticketFind => ticketFind.id === ticket.id);
                    if (index > -1) {
                        storedTicketsClone.splice(index, 1);
                        storedTicketsClone.push(ticket)
                    }
                    this.storedTickets = storedTicketsClone;
                })
            );
        }

        return throwError(new Error('ticket not found'));
    }
}
