import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincodetodoComponent } from './admincodetodo.component';

describe('AdmincodetodoComponent', () => {
  let component: AdmincodetodoComponent;
  let fixture: ComponentFixture<AdmincodetodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincodetodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincodetodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
