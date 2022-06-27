import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';
import { WorkoutType } from 'src/app/model/workout-type';
import { WorkoutTypeService } from 'src/app/service/workout-type.service';

@Component({
  selector: 'app-workout-type-editor',
  templateUrl: './workout-type-editor.component.html',
  styleUrls: ['./workout-type-editor.component.scss']
})
export class WorkoutTypeEditorComponent implements OnInit {

  workoutType$: Observable<WorkoutType> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (params['_id']) {
        return this.workoutTypeService.get(params['_id'])
      }
      return of(new WorkoutType())
    })
  );

  clicked: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private workoutTypeService: WorkoutTypeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(form: NgForm, workoutType: WorkoutType): void {
    this.clicked = true;
    if (workoutType._id === '') {
      this.workoutTypeService.create(form.value).subscribe(
        () => this.router.navigate(['sport-supplement']),
        err => console.error(err)
      );
    } else {
      this.workoutTypeService.update(workoutType).subscribe(
        () => this.router.navigate(['sport-supplement']),
        err => console.error(err)
      );
    }
  }

}
