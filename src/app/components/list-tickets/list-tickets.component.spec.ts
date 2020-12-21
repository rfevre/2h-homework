import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Ticket } from 'src/model/ticket.interface';
import { FilterTycketByIdPipe } from '../../pipe/filter-ticket-by-id.pipe';
import { ListTicketsComponent } from './list-tickets.component';
import { DataState, selectAllTickets } from 'src/app/ngrx/data.reducer';

describe('ListTicketsComponent', () => {
  let component: ListTicketsComponent;
  let fixture: ComponentFixture<ListTicketsComponent>;
  let store: MockStore;

  let ticket: Ticket = {
    assigneeId: 0,
    completed: false,
    description: 'test',
    id: 0
  }

  const initialState: DataState = {
    users: {
      entities: undefined,
      callState:  undefined,
      ids: undefined
    },
    tickets: {
      entities: undefined,
      callState:  undefined,
      ids: undefined
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTicketsComponent, FilterTycketByIdPipe],
      providers: [
        provideMockStore({ initialState }),
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTicketsComponent);

    component = fixture.componentInstance;
    selectAllTickets.setResult([ticket]);

    store.refreshState();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
