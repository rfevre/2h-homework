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

@NgModule({
    declarations: [AppComponent, LoadingComponent, TicketComponent, AddTicketComponent, ViewTicketComponent, ListTicketsComponent],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, RouterModule],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
