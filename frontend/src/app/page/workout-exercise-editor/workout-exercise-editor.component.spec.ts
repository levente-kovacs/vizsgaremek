import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutExerciseEditorComponent } from './workout-exercise-editor.component';

describe('WorkoutExerciseEditorComponent', () => {
  let component: WorkoutExerciseEditorComponent;
  let fixture: ComponentFixture<WorkoutExerciseEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutExerciseEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutExerciseEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
