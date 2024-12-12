import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDuplicateProjectComponent } from './edit-duplicate-project.component';

describe('EditDuplicateProjectComponent', () => {
  let component: EditDuplicateProjectComponent;
  let fixture: ComponentFixture<EditDuplicateProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDuplicateProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDuplicateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
