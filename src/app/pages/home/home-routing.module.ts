import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateHomeComponent } from './candidate-home/candidate-home.component';
import { HomeComponent } from './home.component';
import { LetterMotivationComponent } from './letter-motivation/letter-motivation.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'cv', pathMatch: 'full' },
      { path: 'cv', component: CandidateHomeComponent },
      { path: 'letter-motivation', component: LetterMotivationComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
