import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalorieChart } from 'src/app/model/calorie-chart';
import { CalorieChartService } from 'src/app/service/calorie-chart.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-calorie-chart',
  templateUrl: './calorie-chart.component.html',
  styleUrls: ['./calorie-chart.component.scss'],
})
export class CalorieChartComponent implements OnInit {

  columns = this.config.calorieChartTableColumns;
  list$ = this.calorieChartService.getAll();
  entity = 'calorie-chart';
  filterKeys: string[][] = this.config.calorieChartTableColumns.map(item => [item.key, item.title]);
  filterKey: string = this.filterKeys[0][0];

  constructor(
    private config: ConfigService,
    private calorieChartService: CalorieChartService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSelectOne(calorieChart: CalorieChart): void {
    this.router.navigate(['/', 'calorie-chart', calorieChart._id])
  }

  onDeleteOne(calorieChart: CalorieChart): void {
    if (window.confirm('Biztosan törli ezt az élelmiszert?')) {
      this.calorieChartService
        .remove(calorieChart._id)
        .subscribe(() => (this.list$ = this.calorieChartService.getAll()));
      // this.toastr.showSuccessWithTimeout(`
      //   <table class="table">
      //     <thead>
      //       <tr>
      //         <th>Élelmiszer azonosítója</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       <tr>
      //         <td>${calorieChart._id}</td>
      //       </tr>
      //     </tbody>
      //   </table>
      //   </span>`,
      //   "Az élelmiszer sikeresen törlődött:",
      //   5000)
    }
  }
}
