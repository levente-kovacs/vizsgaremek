import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalorieChart } from '../model/calorie-chart';
import { WorkoutType } from '../model/workout-type';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutTypeService extends BaseService<WorkoutType> {

  constructor(
    public override config: ConfigService,
    public override http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'workout-type';
  }
}
