import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainNavComponent } from '../components/candidate/main-nav/main-nav.component';
import { CommentComponent } from '../components/candidate/comment/comment.component';
import { SkillsBarComponent } from '../components/skills/skills-bar/skills-bar.component';
import { SubSkillsComponent } from '../components/skills/sub-skills/sub-skills.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SharedModule { }
