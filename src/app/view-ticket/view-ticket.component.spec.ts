import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { of } from 'rxjs';
import { BackendService } from '../backend.service';
import { ViewTicketComponent } from './view-ticket.component';

describe('ViewTicketComponent', () => {
  let component: ViewTicketComponent;
  let fixture: ComponentFixture<ViewTicketComponent>;
  let mockBackendService;

  beforeEach(async () => {
    mockBackendService = jasmine.createSpyObj(['ticket', 'user']);
    mockBackendService.ticket.and.returnValue(of(null));
    mockBackendService.user.and.returnValue(of(null));

    await TestBed.configureTestingModule({
      declarations: [ViewTicketComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: BackendService, useValue: mockBackendService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
