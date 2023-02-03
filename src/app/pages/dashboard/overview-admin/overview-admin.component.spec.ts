import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewAdminComponent } from './overview-admin.component';

describe('OverviewAdminComponent', () => {
  let component: OverviewAdminComponent;
  let fixture: ComponentFixture<OverviewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
