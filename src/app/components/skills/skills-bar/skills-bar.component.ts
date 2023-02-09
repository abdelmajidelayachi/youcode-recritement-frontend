import { SkillsService } from './../../../services/skills.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-bar',
  templateUrl: './skills-bar.component.html',
  styleUrls: ['./skills-bar.component.css'],
})
export class SkillsBarComponent implements OnInit {
  currentUserString: any = localStorage.getItem('currentUser');
  currentUser: any = JSON.parse(this.currentUserString);

  frontendControlName: string = 'frontend';
  backendControlName: string = 'backend';
  outilControlName: string = 'outil';
  dbControlName: string = 'db';

  idSkill: string = '';

  frontendSkills: any = [];
  backendSkills: any = [];
  outilSkills: any = [];
  dbSkills: any = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.getAllSkills();
  }

  getAllSkills() {
    this.skillsService.getAllSkills().subscribe(
      (res) => {
        this.idSkill = res.id_skill;
        this.frontendSkills = res.frontend
          .split(';')
          .filter((e: string) => e != '');
        this.backendSkills = res.backend
          .split(';')
          .filter((e: string) => e != '');
        this.outilSkills = res.outil.split(';').filter((e: string) => e != '');
        this.dbSkills = res.db.split(';').filter((e: string) => e != '');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
