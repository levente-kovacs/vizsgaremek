import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { LoginComponent } from './page/login/login.component';
import { UserComponent } from './page/user/user.component';
import { UserEditorComponent } from './page/user-editor/user-editor.component';
import { JwtInterceptor } from './service/jwt.interceptor';
import { AuthService } from './service/auth.service';
import { HomeComponent } from './page/home/home.component';

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
    LoginComponent,
    UserComponent,
    UserEditorComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GenericTableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      deps: [
        AuthService,
      ],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
