import { Component, OnInit } from '@angular/core';
import { CalorieChartService } from 'src/app/service/calorie-chart.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-calorie-chart',
  templateUrl: './calorie-chart.component.html',
  styleUrls: ['./calorie-chart.component.scss']
})
export class CalorieChartComponent implements OnInit {

  columns = this.config.calorieChartTableColumns;

  list$ = this.calorieChartService.getAll();

  constructor(
    private config: ConfigService,
    private calorieChartService: CalorieChartService,
  ) { }

  ngOnInit(): void {
  }

}
