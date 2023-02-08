import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HrComponent } from './hr/hr.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { OverviewAdminComponent } from './overview-admin/overview-admin.component';
import { ProfileComponent } from '../home/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: '', component: OverviewAdminComponent },
      { path: 'hrs', component: HrComponent },
      { path: 'candidates', component: CandidatesComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
  // {
  //   path: 'candidate/:id/cv',
  //   component: CandidateHomeComponent,
  //   canActivate: [CheckRoleGuard],
  //   data: { expectedRole: ['ROLE_HR'] },
  // },
  // {
  //   path: 'candidate/:id/letter-motivation',
  //   component: CandidateHomeComponent,
  //   canActivate: [CheckRoleGuard],
  //   data: { expectedRole: ['ROLE_HR'] },
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class DashboardRoutingModule {}
