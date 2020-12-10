import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataState, selectTicketState, selectUserState } from '../ngrx/data.reducer';
import { TicketState } from '../ngrx/ticket/ticket.reducer';
import { UserState } from '../ngrx/user/user.reducer';

interface DisabledInputData {
  ticketState: TicketState,
  userState: UserState
}
@Directive({
  selector: '[appDisabledInputOnLoading]'
})
export class DisabledInputOnLoadingDirective implements OnDestroy {

  loadingSubscription: Subscription;

  constructor(private store: Store<DataState>, private el: ElementRef) {
    const ticketsState$: Observable<TicketState> = this.store.select(selectTicketState);
    const usersState$: Observable<UserState> = this.store.select(selectUserState);

    const data$ = combineLatest([ticketsState$, usersState$])
      .pipe(
        map(([ticketState, userState]) => {
          return {
            ticketState,
            userState
          }
        })
      );

    this.loadingSubscription = data$.subscribe((disabledInputData: DisabledInputData) => {
      if (disabledInputData.ticketState.isLoading || disabledInputData.userState.isLoading) {
        this.el.nativeElement.disabled = true;
      } else {
        this.el.nativeElement.disabled = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.loadingSubscription && this.loadingSubscription.unsubscribe();
  }

}
