import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelogAddComponent } from './timelog-add.component';

describe('TimelogAddComponent', () => {
  let component: TimelogAddComponent;
  let fixture: ComponentFixture<TimelogAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelogAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
