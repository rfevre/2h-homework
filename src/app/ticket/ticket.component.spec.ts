import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketComponent } from './ticket.component';


describe('TicketComponent', () => {
  let component: TicketComponent;
  let fixture: ComponentFixture<TicketComponent>;

  let user = {
    id: 0,
    name: 'testName'
  };

  let otherUser = {
    id: 1,
    name: 'otherTestName'
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketComponent);
    component = fixture.componentInstance;
    component.ticket = {
      id: 0,
      completed: false,
      assigneeId: 0,
      description: "description"
    };
    component.users = [user, otherUser];
    component.currentlyAssigneeUser = user;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display ticket info', () => {
    expect(fixture.nativeElement.querySelector('h5').textContent).toContain('Ticket: 0');
    expect(fixture.nativeElement.querySelector('h5').textContent).toContain('In progress');
    expect(fixture.nativeElement.querySelector('.card-body').textContent).toContain('testName');
    expect(fixture.nativeElement.querySelector('.card-body').textContent).toContain('description');
    expect(fixture.nativeElement.querySelector('.card-body').textContent).toContain('Complete');
  });

  it('should call change ticket completion on click button', () => {
    spyOn(component, 'changeTicketCompletion');
    fixture.nativeElement.querySelector('button').click();
    expect(component.changeTicketCompletion).toHaveBeenCalled();
  });

  it('should call select change when change select assignee user', () => {
    spyOn(component, 'selectOnChange');
    const select: HTMLSelectElement = fixture.nativeElement.querySelector('select');
    select.options[1].value;
    select.dispatchEvent(new Event('change'));
    expect(component.selectOnChange).toHaveBeenCalled();
  });
});
