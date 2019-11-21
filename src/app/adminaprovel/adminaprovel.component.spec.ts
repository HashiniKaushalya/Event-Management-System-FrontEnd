import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaprovelComponent } from './adminaprovel.component';

describe('AdminaprovelComponent', () => {
  let component: AdminaprovelComponent;
  let fixture: ComponentFixture<AdminaprovelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminaprovelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaprovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
