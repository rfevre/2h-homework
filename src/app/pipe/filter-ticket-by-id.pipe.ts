import { Pipe, PipeTransform } from '@angular/core';
import { Ticket } from 'src/interfaces/ticket.interface';

@Pipe({
  name: 'filterTicketById'
})
export class FilterTycketByIdPipe implements PipeTransform {

  transform(tickets: Ticket[], searchText: string): any[] {
    if (!tickets) {
      return [];
    }
    if (!searchText) {
      return tickets;
    }
    searchText = searchText.toLocaleLowerCase();

    return tickets.filter(ticket => {
      return ticket.id === +searchText;
    });
  }

}
