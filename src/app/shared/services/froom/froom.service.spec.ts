import { TestBed } from '@angular/core/testing';

import { FroomService } from './froom.service';

describe('FroomService', () => {
  let service: FroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
