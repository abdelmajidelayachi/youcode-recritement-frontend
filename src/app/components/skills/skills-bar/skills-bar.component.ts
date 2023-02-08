import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-bar',
  templateUrl: './skills-bar.component.html',
  styleUrls: ['./skills-bar.component.css'],
})
export class SkillsBarComponent {
  currentUserString: any = localStorage.getItem('currentUser');
  currentUser: any = JSON.parse(this.currentUserString);
}
