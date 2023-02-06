import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterMotivationComponent } from './letter-motivation.component';

describe('LetterMotivationComponent', () => {
  let component: LetterMotivationComponent;
  let fixture: ComponentFixture<LetterMotivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterMotivationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterMotivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
