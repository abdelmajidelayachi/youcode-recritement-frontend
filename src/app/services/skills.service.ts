import { Constants } from './../shared/Constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(private http: HttpClient) {}

  addSkill(data: any): Observable<any> {
    return this.http.post(Constants.apiEndPoint.skills.addSkills, data);
  }

  getAllSkills(): Observable<any> {
    return this.http.get(Constants.apiEndPoint.skills.getAllSkills);
  }

  deleteSkill(data: any): Observable<any> {
    return this.http.post(Constants.apiEndPoint.skills.deleteSkill, data);
  }
}
