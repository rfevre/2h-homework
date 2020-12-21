import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { DataState, selectTicketById, selectTicketError, selectUserByAssigneeId } from 'src/app/ngrx/data.reducer';
import { ViewTicketComponent } from './view-ticket.component';

describe('ViewTicketComponent', () => {
  let component: ViewTicketComponent;
  let fixture: ComponentFixture<ViewTicketComponent>;
  let store: MockStore;

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
      declarations: [ViewTicketComponent],
      imports: [RouterTestingModule],
      providers: [
        provideMockStore({ initialState })
      ]
    }).compileComponents();

    selectTicketById.setResult({
      assigneeId: 0,
      completed: true,
      description: '',
      id: 0
    });

    selectUserByAssigneeId.setResult({
      id: 0,
      name: 'test'
    })

    selectTicketError.setResult('test')

    store = TestBed.inject(MockStore);
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
