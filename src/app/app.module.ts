import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { LoadingComponent } from './loading/loading.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
    declarations: [AppComponent, LoadingComponent, TicketComponent],
    imports: [BrowserModule],
    providers: [BackendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}