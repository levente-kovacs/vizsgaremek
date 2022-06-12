import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutScheduleEditorComponent } from './workout-schedule-editor.component';

describe('WorkoutScheduleEditorComponent', () => {
  let component: WorkoutScheduleEditorComponent;
  let fixture: ComponentFixture<WorkoutScheduleEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutScheduleEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutScheduleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
