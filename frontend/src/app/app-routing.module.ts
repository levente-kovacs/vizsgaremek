import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericTableModule } from './generic-table/generic-table.module';
import { CalorieChartComponent } from './page/calorie-chart/calorie-chart.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  // },
  {
    path: 'calorie-chart',
    component: CalorieChartComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    GenericTableModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
