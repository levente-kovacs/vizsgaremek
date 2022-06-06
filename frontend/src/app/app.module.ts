import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GenericTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
