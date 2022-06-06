import { TestBed } from '@angular/core/testing';

import { SportSupplementService } from './sport-supplement.service';

describe('SportSupplementService', () => {
  let service: SportSupplementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportSupplementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
