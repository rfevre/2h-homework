import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Ticket } from 'src/interfaces/ticket.interface';
import { BackendService } from '../backend.service';
import { FilterTycketByIdPipe } from '../pipe/filter-ticket-by-id.pipe';
import { ListTicketsComponent } from './list-tickets.component';

describe('ListTicketsComponent', () => {
  let component: ListTicketsComponent;
  let fixture: ComponentFixture<ListTicketsComponent>;
  let mockBackendService;

  let user = {
    id: 0,
    name: 'testName'
  };

  
  let ticket: Ticket = {
    assigneeId: 0,
    completed: false,
    description: 'test',
    id: 0
  }

  beforeEach(async () => {
    mockBackendService = jasmine.createSpyObj(['tickets', 'users']);
    mockBackendService.tickets.and.returnValue(of([ticket]));
    mockBackendService.users.and.returnValue(of([user]));

    await TestBed.configureTestingModule({
      declarations: [ListTicketsComponent, FilterTycketByIdPipe],
      providers: [
        { provide: BackendService, useValue: mockBackendService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all tickets', () => {
    expect(mockBackendService.tickets).toHaveBeenCalled();
  });
});
