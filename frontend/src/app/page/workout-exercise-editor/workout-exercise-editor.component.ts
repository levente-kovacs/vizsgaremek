import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';
import { WorkoutExercise } from 'src/app/model/workout-exercise';
import { WorkoutExerciseService } from 'src/app/service/workout-exercise.service';
import { WorkoutTypeService } from 'src/app/service/workout-type.service';

@Component({
  selector: 'app-workout-exercise-editor',
  templateUrl: './workout-exercise-editor.component.html',
  styleUrls: ['./workout-exercise-editor.component.scss']
})
export class WorkoutExerciseEditorComponent implements OnInit {

  workoutExercise$: Observable<WorkoutExercise> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (params['_id']) {
        return this.workoutExerciseService.get(params['_id'])
      }
      return of(new WorkoutExercise())
    })
  );

  workoutTypes$ = this.workoutTypeService.getAll();

  clicked: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private workoutExerciseService: WorkoutExerciseService,
    private workoutTypeService: WorkoutTypeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(form: NgForm, workoutExercise: WorkoutExercise): void {
    this.clicked = true;
    if (workoutExercise._id === '') {
      this.workoutExerciseService.create(form.value).subscribe(
        () => this.router.navigate(['workout-exercise']),
        err => console.error(err)
      );
    } else {
      this.workoutExerciseService.update(workoutExercise).subscribe(
        () => this.router.navigate(['workout-exercise']),
        err => console.error(err)
      );
    }
  }
}
