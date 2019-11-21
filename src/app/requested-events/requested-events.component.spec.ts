import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedEventsComponent } from './requested-events.component';

describe('RequestedEventsComponent', () => {
  let component: RequestedEventsComponent;
  let fixture: ComponentFixture<RequestedEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
