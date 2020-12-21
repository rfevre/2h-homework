import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListTicketsComponent } from './components/list-tickets/list-tickets.component';
import { ViewTicketComponent } from './components/view-ticket/view-ticket.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tickets',
    pathMatch: 'full'
  },
  {
    path: 'tickets',
    component: ListTicketsComponent
  },
  {
    path: 'tickets/:id',
    component: ViewTicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
