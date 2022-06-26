import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorkoutExercise } from '../model/workout-exercise';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutExerciseService extends BaseService<WorkoutExercise> {

  constructor(
    public override config: ConfigService,
    public override http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'workout-exercise';
  }
}
