import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalorieChart } from '../model/calorie-chart';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutScheduleService extends BaseService<CalorieChart> {

  constructor(
    public override config: ConfigService,
    public override http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'workout-schedule';
  }
}
