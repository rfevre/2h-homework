import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BackendService } from '../backend.service';
import { FilterTycketByIdPipe } from '../pipe/filter-ticket-by-id.pipe';
import { ListTicketsComponent } from './list-tickets.component';

describe('ListTicketsComponent', () => {
  let component: ListTicketsComponent;
  let fixture: ComponentFixture<ListTicketsComponent>;
  let mockBackendService;

  beforeEach(async () => {
    mockBackendService = jasmine.createSpyObj(['tickets', 'users']);
    mockBackendService.tickets.and.returnValue(of([]));
    mockBackendService.users.and.returnValue(of([]));

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
});
