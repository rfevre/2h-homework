import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { DisabledInputOnLoadingDirective } from './directive/disabled-input-on-loading.directive';
import { ListTicketsComponent } from './components/list-tickets/list-tickets.component';
import { LoadingComponent } from './components/loading/loading.component';
import { dataReducers } from './ngrx/data.reducer';
import { TicketEffects } from './ngrx/ticket/ticket.effects';
import { UserEffects } from './ngrx/user/user.effects';
import { FilterTycketByIdPipe } from './pipe/filter-ticket-by-id.pipe';
import { TicketComponent } from './components/ticket/ticket.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';

@NgModule({
    declarations: [AppComponent, LoadingComponent, TicketComponent, AddTicketComponent, ViewTicketComponent, ListTicketsComponent, DisabledInputOnLoadingDirective, FilterTycketByIdPipe],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, RouterModule,
        StoreModule.forRoot(dataReducers),
        EffectsModule.forRoot([TicketEffects, UserEffects]),
        StoreDevtoolsModule.instrument()
    ],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
