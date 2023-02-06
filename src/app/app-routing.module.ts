import { ProfileComponent } from './pages/home/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { GuestGuard } from './core/guards/guest.guard';
import { AdminGuard } from './core/guards/admin.guard';
import { CandidateGuard } from './core/guards/candidate.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/authentication-routing.module').then(
        (m) => m.AuthenticationRoutingModule
      ),
    canActivate: [GuestGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home-routing.module').then(
        (m) => m.HomeRoutingModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard-routing.module').then(
        (m) => m.DashboardRoutingModule
      ),
    canActivate: [AuthGuard],
  },
  // other routes go here
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
