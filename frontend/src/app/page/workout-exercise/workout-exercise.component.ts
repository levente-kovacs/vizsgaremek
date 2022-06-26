import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutExercise } from 'src/app/model/workout-exercise';
import { ConfigService } from 'src/app/service/config.service';
import { WorkoutExerciseService } from 'src/app/service/workout-exercise.service';

@Component({
  selector: 'app-workout-exercise',
  templateUrl: './workout-exercise.component.html',
  styleUrls: ['./workout-exercise.component.scss']
})
export class WorkoutExerciseComponent implements OnInit {

  columns = this.config.workoutExerciseTableColumns;
  list$ = this.workoutExerciseService.getAll();
  entity = 'workout-exercise';
  filterKeys: string[][] = this.config.workoutExerciseTableColumns.map(item => [item.key, item.title]);
  filterKey: string = this.filterKeys[0][0];

  constructor(
    private config: ConfigService,
    private workoutExerciseService: WorkoutExerciseService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSelectOne(workoutExercise: WorkoutExercise): void {
    this.router.navigate(['/', 'workout-exercise', workoutExercise._id])
  }

  onDeleteOne(workoutExercise: WorkoutExercise): void {
    if (window.confirm('Biztosan törli ezt a gyakorlatot?')) {
      this.workoutExerciseService
        .remove(workoutExercise._id)
        .subscribe(() => (this.list$ = this.workoutExerciseService.getAll()));
      // this.toastr.showSuccessWithTimeout(`
      //   <table class="table">
      //     <thead>
      //       <tr>
      //         <th>Élelmiszer azonosítója</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       <tr>
      //         <td>${WorkoutExercise._id}</td>
      //       </tr>
      //     </tbody>
      //   </table>
      //   </span>`,
      //   "Az élelmiszer sikeresen törlődött:",
      //   5000)
    }
  }

}
