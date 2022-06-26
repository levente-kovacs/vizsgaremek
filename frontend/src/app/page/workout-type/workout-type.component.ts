import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutType } from 'src/app/model/workout-type';
import { ConfigService } from 'src/app/service/config.service';
import { WorkoutTypeService } from 'src/app/service/workout-type.service';

@Component({
  selector: 'app-workout-type',
  templateUrl: './workout-type.component.html',
  styleUrls: ['./workout-type.component.scss']
})
export class WorkoutTypeComponent implements OnInit {

  columns = this.config.workoutTypeTableColumns;
  list$ = this.workoutTypeService.getAll();
  entity = 'workout-type';
  filterKeys: string[][] = this.config.workoutTypeTableColumns.map(item => [item.key, item.title]);
  filterKey: string = this.filterKeys[0][0];

  constructor(
    private config: ConfigService,
    private workoutTypeService: WorkoutTypeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSelectOne(workoutType: WorkoutType): void {
    this.router.navigate(['/', 'workout-type', workoutType._id])
  }

  onDeleteOne(workoutType: WorkoutType): void {
    if (window.confirm('Biztosan törli ezt az edzés típust?')) {
      this.workoutTypeService
        .remove(workoutType._id)
        .subscribe(() => (this.list$ = this.workoutTypeService.getAll()));
      // this.toastr.showSuccessWithTimeout(`
      //   <table class="table">
      //     <thead>
      //       <tr>
      //         <th>Élelmiszer azonosítója</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       <tr>
      //         <td>${WorkoutType._id}</td>
      //       </tr>
      //     </tbody>
      //   </table>
      //   </span>`,
      //   "Az élelmiszer sikeresen törlődött:",
      //   5000)
    }
  }

}
