import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FroomCheckoutComponent } from './froom-checkout.component';

describe('FroomCheckoutComponent', () => {
  let component: FroomCheckoutComponent;
  let fixture: ComponentFixture<FroomCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FroomCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FroomCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
