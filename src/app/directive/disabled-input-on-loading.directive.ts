import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IState } from '../ngrx/loading.reducer';

@Directive({
  selector: '[appDisabledInputOnLoading]'
})
export class DisabledInputOnLoadingDirective implements OnDestroy {

  loadingSubscription: Subscription;

  constructor(private store: Store<{ loadingData: IState }>, private el: ElementRef) {
    this.loadingSubscription = this.store.select(state => state.loadingData.nbrOfLoading).subscribe((nbrOfLoading: number) => {
      this.el.nativeElement.disabled = nbrOfLoading > 0;
    });
  }

  ngOnDestroy(): void {
    this.loadingSubscription && this.loadingSubscription.unsubscribe();
  }

}
