import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConcludedComponent } from './order-concluded.component';

describe('OrderConcludedComponent', () => {
  let component: OrderConcludedComponent;
  let fixture: ComponentFixture<OrderConcludedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderConcludedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderConcludedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
