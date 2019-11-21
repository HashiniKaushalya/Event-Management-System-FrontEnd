import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodetodoComponent } from './codetodo.component';

describe('CodetodoComponent', () => {
  let component: CodetodoComponent;
  let fixture: ComponentFixture<CodetodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodetodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodetodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
