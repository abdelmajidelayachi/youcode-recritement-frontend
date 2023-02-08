import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SkillsService } from './../../../services/skills.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-skills',
  templateUrl: './sub-skills.component.html',
  styleUrls: ['./sub-skills.component.css'],
})
export class SubSkillsComponent implements OnInit {
  constructor(private skillsService: SkillsService) {}

  @Input() skillControlName: string = '';
  @Input() skills: string = '';
  @Input() skillName: string = '';
  @Input() idSkill: string = '';

  @Output()
  callParent = new EventEmitter();

  functionCalledFromParent(): void {
    this.callParent.emit();
  }

  formGroupAddSkill: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formGroupAddSkill = new FormGroup({
      frontend: new FormControl('', [Validators.required]),
      backend: new FormControl('', [Validators.required]),
      outil: new FormControl('', [Validators.required]),
      db: new FormControl('', [Validators.required]),
    });
  }

  addSkill(formGroup: FormGroup): any {
    const data = formGroup.value;
    this.skillsService.addSkill(data).subscribe(
      (res) => {
        // console.log(res);
        formGroup.reset();
        this.functionCalledFromParent();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteSkill(idSkill: string, skill: string, skillName: string) {
    const formData = new FormData();

    formData.append('idSkill', idSkill);
    formData.append('skill', skill);
    formData.append('skillName', skillName);

    this.skillsService.deleteSkill(formData).subscribe(
      (res) => {
        // console.log(res);
        this.functionCalledFromParent();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
