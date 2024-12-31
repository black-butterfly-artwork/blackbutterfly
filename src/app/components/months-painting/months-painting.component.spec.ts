import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsPaintingComponent } from './months-painting.component';

describe('MonthsPaintingComponent', () => {
  let component: MonthsPaintingComponent;
  let fixture: ComponentFixture<MonthsPaintingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthsPaintingComponent]
    });
    fixture = TestBed.createComponent(MonthsPaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
