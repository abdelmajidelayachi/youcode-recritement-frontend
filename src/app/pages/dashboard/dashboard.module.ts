import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HrComponent } from './hr/hr.component';
import { AddHrModalComponent } from 'src/app/components/modals/add-hr-modal/add-hr-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardNavbarComponent } from 'src/app/components/dashboard-navbar/dashboard-navbar.component';
import { DashboardSidebarComponent } from 'src/app/components/dashboard-sidebar/dashboard-sidebar.component';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { OverviewAdminComponent } from './overview-admin/overview-admin.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { CandidateCvComponent } from './candidate-cv/candidate-cv.component';
import { CommentHrComponent } from 'src/app/components/hr/comment-hr/comment-hr.component';

@NgModule({
  declarations: [
    HrComponent,
    AddHrModalComponent,
    DashboardNavbarComponent,
    DashboardSidebarComponent,
    PaginationComponent,
    OverviewAdminComponent,
    CandidatesComponent,
    SearchComponent,
    CandidateCvComponent,
    CommentHrComponent
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AddHrModalComponent,
    DashboardNavbarComponent,
    DashboardSidebarComponent,
    CandidateCvComponent,
    CommentHrComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
