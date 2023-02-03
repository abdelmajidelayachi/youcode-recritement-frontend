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

@NgModule({
  declarations: [
    HrComponent,
    AddHrModalComponent,
    DashboardNavbarComponent,
    DashboardSidebarComponent, 
    PaginationComponent, OverviewAdminComponent
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class DashboardModule { }
