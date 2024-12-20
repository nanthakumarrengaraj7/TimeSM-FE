import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelogViewComponent } from './timelog-view.component';

describe('TimelogViewComponent', () => {
  let component: TimelogViewComponent;
  let fixture: ComponentFixture<TimelogViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelogViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
