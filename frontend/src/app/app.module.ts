import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/nav/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { CalorieChartComponent } from './page/calorie-chart/calorie-chart.component';
import { GenericTableModule } from './generic-table/generic-table.module';
import { SportSupplementComponent } from './page/sport-supplement/sport-supplement.component';
import { WorkoutExerciseComponent } from './page/workout-exercise/workout-exercise.component';
import { WorkoutTypeComponent } from './page/workout-type/workout-type.component';
import { WorkoutScheduleComponent } from './page/workout-schedule/workout-schedule.component';
import { CalorieChartEditorComponent } from './page/calorie-chart-editor/calorie-chart-editor.component';
import { FormsModule } from '@angular/forms';
import { SportSupplementEditorComponent } from './page/sport-supplement-editor/sport-supplement-editor.component';
import { WorkoutExerciseEditorComponent } from './page/workout-exercise-editor/workout-exercise-editor.component';
import { WorkoutScheduleEditorComponent } from './page/workout-schedule-editor/workout-schedule-editor.component';
import { WorkoutTypeEditorComponent } from './page/workout-type-editor/workout-type-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CalorieChartComponent,
    SportSupplementComponent,
    WorkoutExerciseComponent,
    WorkoutTypeComponent,
    WorkoutScheduleComponent,
    CalorieChartEditorComponent,
    SportSupplementEditorComponent,
    WorkoutExerciseEditorComponent,
    WorkoutScheduleEditorComponent,
    WorkoutTypeEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GenericTableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
