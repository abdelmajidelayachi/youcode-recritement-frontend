import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HrComponent } from './hr/hr.component';
import { CandidateComponent } from './candidate/candidate.component';

@NgModule({
  declarations: [
    HrComponent,
    CandidateComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
  ]
})
export class DashboardModule { }
