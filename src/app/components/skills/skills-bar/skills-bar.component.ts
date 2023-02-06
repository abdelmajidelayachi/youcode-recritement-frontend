import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-bar',
  templateUrl: './skills-bar.component.html',
  styleUrls: ['./skills-bar.component.css'],
})
export class SkillsBarComponent implements OnInit {
  currentUserString: any = localStorage.getItem('currentUser');
  currentUser: any = JSON.parse(this.currentUserString);

  constructor() {}

  ngOnInit(): void {}

  addFrontendSkill() {}

  addBackendSkill() {}

  addDatabaseSkill() {}

  addOutilsSkills() {}
}
