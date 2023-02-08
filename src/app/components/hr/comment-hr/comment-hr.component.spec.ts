import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentHrComponent } from './comment-hr.component';

describe('CommentHrComponent', () => {
  let component: CommentHrComponent;
  let fixture: ComponentFixture<CommentHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentHrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
