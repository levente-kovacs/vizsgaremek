import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTypeEditorComponent } from './workout-type-editor.component';

describe('WorkoutTypeEditorComponent', () => {
  let component: WorkoutTypeEditorComponent;
  let fixture: ComponentFixture<WorkoutTypeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutTypeEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutTypeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
