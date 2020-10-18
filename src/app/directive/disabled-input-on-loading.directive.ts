import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appDisabledInputOnLoading]'
})
export class DisabledInputOnLoadingDirective implements OnDestroy {

  loadingSubscription: Subscription;

  constructor(private store: Store<{ loading: boolean }>, private el: ElementRef) {
    this.loadingSubscription = this.store.select('loading').subscribe((loading) => {
      this.el.nativeElement.disabled = loading;
    });
  }

  ngOnDestroy(): void {
    this.loadingSubscription && this.loadingSubscription.unsubscribe();
  }

}
