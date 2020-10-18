import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { LoadingComponent } from './loading/loading.component';
import { TicketComponent } from './ticket/ticket.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { StoreModule } from '@ngrx/store';
import { loadingReducer } from './ngrx/loading.reducer';
import { DisabledInputOnLoadingDirective } from './directive/disabled-input-on-loading.directive';
import { FilterTycketByIdPipe } from './pipe/filter-ticket-by-id.pipe';

@NgModule({
    declarations: [AppComponent, LoadingComponent, TicketComponent, AddTicketComponent, ViewTicketComponent, ListTicketsComponent, DisabledInputOnLoadingDirective, FilterTycketByIdPipe],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, RouterModule, StoreModule.forRoot({ loading: loadingReducer })],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
