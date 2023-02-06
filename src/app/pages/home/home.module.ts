import { SubSkillsComponent } from './../../components/skills/sub-skills/sub-skills.component';
import { SkillsBarComponent } from './../../components/skills/skills-bar/skills-bar.component';
import { CoreModule } from './../../core/core.module';
import { CommentComponent } from './../../components/candidate/comment/comment.component';
import { MainNavComponent } from './../../components/candidate/main-nav/main-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { CandidateHomeComponent } from './candidate-home/candidate-home.component';
import { LetterMotivationComponent } from './letter-motivation/letter-motivation.component';

@NgModule({
  declarations: [
    ProfileComponent,
    CandidateHomeComponent,
    MainNavComponent,
    CommentComponent,
    LetterMotivationComponent,
    SkillsBarComponent,
    SubSkillsComponent,
  ],
  exports: [
    ProfileComponent,
    CandidateHomeComponent,
    MainNavComponent,
    CommentComponent,
    SkillsBarComponent,
    SubSkillsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
  ],
})
export class HomeModule {}
