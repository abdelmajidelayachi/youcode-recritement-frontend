import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Constants } from './../shared/Constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getProfileData(){
      if(this.authService.checkHasRole('ROLE_CANDIDATE')){
        return this.http.get(Constants.apiEndPoint.candidate.profile);
      }else if(this.authService.checkHasRole('ROLE_HR')){
        return this.http.get(Constants.apiEndPoint.hr.profile);
      }else if(this.authService.checkHasRole('ROLE_ADMIN')){
        return this.http.get(Constants.apiEndPoint.admin.profile);
      }
      return new Observable();
  }

  getOneCandidate(idCandidate: String) {
    return this.http.get(
      Constants.apiEndPoint.candidate.getCandidate.replace(
        ':id',
        idCandidate.toString()
      )
    );
  }

  updateCandidate(idCandidate: String, data: any) {
    return this.http.put(
      Constants.apiEndPoint.candidate.updateCandidate.replace(
        ':id',
        idCandidate.toString()
      ),
      data
    );
  }

  updateCandidateImage(image: any): Observable<any> {
    return this.http.post(
      Constants.apiEndPoint.candidate.updateImage +
        '?id=' +
        this.authService.getCurrentUserId(),
      image
    );
  }
}
