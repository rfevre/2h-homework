import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { appIsLoading, DataState } from '../ngrx/data.reducer';

@Directive({
  selector: '[appDisabledInputOnLoading]'
})
export class DisabledInputOnLoadingDirective implements OnDestroy {

  loadingSubscription: Subscription;

  constructor(private store: Store<DataState>, private el: ElementRef) {
    const appIsLoading$: Observable<boolean> = this.store.select(appIsLoading);

    this.loadingSubscription = appIsLoading$.subscribe((appIsLoading: boolean) => {
      if (appIsLoading) {
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
