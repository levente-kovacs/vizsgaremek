import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportSupplementEditorComponent } from './sport-supplement-editor.component';

describe('SportSupplementEditorComponent', () => {
  let component: SportSupplementEditorComponent;
  let fixture: ComponentFixture<SportSupplementEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportSupplementEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportSupplementEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
