import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelogListComponent } from './timelog-list.component';

describe('TimelogListComponent', () => {
  let component: TimelogListComponent;
  let fixture: ComponentFixture<TimelogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelogListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
