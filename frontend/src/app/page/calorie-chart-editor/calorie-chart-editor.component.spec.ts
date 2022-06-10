import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieChartEditorComponent } from './calorie-chart-editor.component';

describe('CalorieChartEditorComponent', () => {
  let component: CalorieChartEditorComponent;
  let fixture: ComponentFixture<CalorieChartEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalorieChartEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalorieChartEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
