import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FroomAdminComponent } from './froom-admin.component';

describe('FroomAdminComponent', () => {
  let component: FroomAdminComponent;
  let fixture: ComponentFixture<FroomAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FroomAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FroomAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
