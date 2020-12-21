import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { DataState } from 'src/app/ngrx/data.reducer';
import { AddTicketComponent } from './add-ticket.component';


describe('AddTicketComponent', () => {
  let component: AddTicketComponent;
  let fixture: ComponentFixture<AddTicketComponent>;
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
      declarations: [AddTicketComponent],
      imports: [ReactiveFormsModule],
      providers: [
        provideMockStore({ initialState }),
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
