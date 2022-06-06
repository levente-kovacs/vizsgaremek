import { TestBed } from '@angular/core/testing';

import { CalorieChartService } from './calorie-chart.service';

describe('CalorieChartService', () => {
  let service: CalorieChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalorieChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
