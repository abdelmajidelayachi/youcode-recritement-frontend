import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHrModalComponent } from './add-hr-modal.component';

describe('AddHrModalComponent', () => {
  let component: AddHrModalComponent;
  let fixture: ComponentFixture<AddHrModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHrModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHrModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
