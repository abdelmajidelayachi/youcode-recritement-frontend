import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSkillsComponent } from './sub-skills.component';

describe('SubSkillsComponent', () => {
  let component: SubSkillsComponent;
  let fixture: ComponentFixture<SubSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
