import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericDataTableComponent } from './generic-table/generic-data-table/generic-data-table.component';
import { GenericTableModule } from './generic-table/generic-table.module';
import { CalorieChartEditorComponent } from './page/calorie-chart-editor/calorie-chart-editor.component';
import { CalorieChartComponent } from './page/calorie-chart/calorie-chart.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { SportSupplementEditorComponent } from './page/sport-supplement-editor/sport-supplement-editor.component';
import { SportSupplementComponent } from './page/sport-supplement/sport-supplement.component';
import { UserEditorComponent } from './page/user-editor/user-editor.component';
import { UserComponent } from './page/user/user.component';
import { WorkoutExerciseEditorComponent } from './page/workout-exercise-editor/workout-exercise-editor.component';
import { WorkoutExerciseComponent } from './page/workout-exercise/workout-exercise.component';
import { WorkoutScheduleEditorComponent } from './page/workout-schedule-editor/workout-schedule-editor.component';
import { WorkoutScheduleComponent } from './page/workout-schedule/workout-schedule.component';
import { WorkoutTypeEditorComponent } from './page/workout-type-editor/workout-type-editor.component';
import { WorkoutTypeComponent } from './page/workout-type/workout-type.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'workout-type',
    component: WorkoutTypeComponent,
  },
  {
    path: 'workout-type/:_id',
    component: WorkoutTypeEditorComponent,
  },
  {
    path: 'workout-exercise',
    component: WorkoutExerciseComponent,
  },
  {
    path: 'workout-exercise/:_id',
    component: WorkoutExerciseEditorComponent,
  },
  {
    path: 'workout-schedule',
    component: WorkoutScheduleComponent,
  },
  {
    path: 'workout-schedule/:_id',
    component: WorkoutScheduleEditorComponent,
  },
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
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'user/:_id',
    component: UserEditorComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
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
