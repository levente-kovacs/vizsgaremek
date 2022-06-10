import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';
import { CalorieChart } from 'src/app/model/calorie-chart';
import { CalorieChartService } from 'src/app/service/calorie-chart.service';

@Component({
  selector: 'app-calorie-chart-editor',
  templateUrl: './calorie-chart-editor.component.html',
  styleUrls: ['./calorie-chart-editor.component.scss']
})
export class CalorieChartEditorComponent implements OnInit {

  calorieChart$: Observable<CalorieChart> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (params['_id']) {
        return this.calorieChartService.get(params['_id'])
      }
      return of(new CalorieChart())
    })
  );

  clicked: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private calorieChartService: CalorieChartService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(form: NgForm, calorieChart: CalorieChart): void {
    this.clicked = true;
    if (calorieChart._id === '') {
      this.calorieChartService.create(form.value).subscribe(
        () => this.router.navigate(['calorie-chart']),
        err => console.error(err)
      );
    } else {
      this.calorieChartService.update(calorieChart).subscribe(
        () => this.router.navigate(['calorie-chart']),
        err => console.error(err)
      );
    }
  }

}
