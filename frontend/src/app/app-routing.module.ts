import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericDataTableComponent } from './generic-table/generic-data-table/generic-data-table.component';
import { GenericTableModule } from './generic-table/generic-table.module';
import { CalorieChartEditorComponent } from './page/calorie-chart-editor/calorie-chart-editor.component';
import { CalorieChartComponent } from './page/calorie-chart/calorie-chart.component';
import { SportSupplementEditorComponent } from './page/sport-supplement-editor/sport-supplement-editor.component';
import { SportSupplementComponent } from './page/sport-supplement/sport-supplement.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent,
  // },
  {
    path: 'calorie-chart',
    component: CalorieChartComponent,
  },
  {
    path: 'calorie-chart/:_id',
    component: CalorieChartEditorComponent,
  },
  {
    path: 'sport-supplement',
    component: SportSupplementComponent,
  },
  {
    path: 'sport-supplement/:_id',
    component: SportSupplementEditorComponent,
  },
  // {
  //   path: 'calorie-chart/:_id',
  //   loadChildren: () => import('./generic-table/generic-table.module').then(m => m.GenericTableModule)
  //   // component: CalorieChartEditorComponent,
  //   // children :[
  //   //   { path: '', component: GenericDataTableComponent},
  // // ]
  // },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    GenericTableModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
