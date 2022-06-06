import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportSupplementComponent } from './sport-supplement.component';

describe('SportSupplementComponent', () => {
  let component: SportSupplementComponent;
  let fixture: ComponentFixture<SportSupplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportSupplementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportSupplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
