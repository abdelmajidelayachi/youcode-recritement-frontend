import { CoreModule } from './../../core/core.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { CandidateHomeComponent } from './candidate-home/candidate-home.component';
import { CommentComponent } from 'src/app/components/candidate/comment/comment.component';
import { SkillsBarComponent } from 'src/app/components/skills/skills-bar/skills-bar.component';
import { SubSkillsComponent } from 'src/app/components/skills/sub-skills/sub-skills.component';
import { MainNavComponent } from 'src/app/components/candidate/main-nav/main-nav.component';
import { LetterMotivationComponent } from './letter-motivation/letter-motivation.component';

@NgModule({
  declarations: [
    ProfileComponent,
    CandidateHomeComponent,
    CommentComponent,
    LetterMotivationComponent,
    MainNavComponent,
    SkillsBarComponent,
    SubSkillsComponent,
  ],
  exports: [
    ProfileComponent,
    CandidateHomeComponent,
    CommentComponent,
    MainNavComponent,
    LetterMotivationComponent,
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
