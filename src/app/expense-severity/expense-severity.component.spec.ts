import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseSeverityComponent } from './expense-severity.component';

describe('ExpenseSeverityComponent', () => {
  let component: ExpenseSeverityComponent;
  let fixture: ComponentFixture<ExpenseSeverityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseSeverityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseSeverityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
