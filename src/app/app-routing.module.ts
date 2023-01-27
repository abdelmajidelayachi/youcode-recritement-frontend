import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { GuestGuard } from './core/guards/guest.guard';

const routes: Routes = [
  {
    path: 'auth', 
    loadChildren: () => import('./authentication/authentication-routing.module').then(m => m.AuthenticationRoutingModule),
    canActivate: [GuestGuard]
  },
  {
    path: '', 
    loadChildren: () => import('./pages/pages-routing.module').then(m => m.PagesRoutingModule),
    canActivate: [AuthGuard]
  },
  // other routes go here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
