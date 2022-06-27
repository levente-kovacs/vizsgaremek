import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Observable } from 'rxjs';
import { CalorieChart } from 'src/app/model/calorie-chart';
import { CalorieChartService } from 'src/app/service/calorie-chart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  calorieChartList$: Observable<CalorieChart[]> = this.calorieChartService.getAll();

  calorieChartData: ChartDataSets[] = [];
  calorieChartLabels: Label[] = [];
  // calorieChartColor: Color[] = [];

  constructor(
    private calorieChartService: CalorieChartService,

  ) { }

  ngOnInit(): void {
    this.calorieChartService.getAll();
    this.calorieChartList$.subscribe((data) => {
      Math.random();
      data.map((d, i) => {
        console.log(d,i)
        this.calorieChartData[i] = {
        data: [d.energy],
        label: d.name,
        borderColor: ['rgba(0,0,0,.5))'],
        borderWidth: [2],
        backgroundColor: `rgba(${Math.floor(Math.random() * 255)},
                                     ${Math.floor(Math.random() * 255)},
                                     ${Math.floor(Math.random() * 255)},
                                     .7)`,

      }
      // console.log(d.energy, this.calorieChartData[i].data)
      // console.log(this.calorieChartData);
    }
      );
    });

  }

}
