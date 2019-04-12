import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionBalanceComponent } from './transaction-balance.component';

describe('TransactionBalanceComponent', () => {
  let component: TransactionBalanceComponent;
  let fixture: ComponentFixture<TransactionBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
