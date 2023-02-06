import { AuthService } from 'src/app/services/auth.service';
import { Constants } from './../shared/Constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  uploadCV(data: FormData): Observable<any> {
    return this.http.post(
      Constants.apiEndPoint.candidate.uploadDocument + '?type=cv',
      data
    );
  }

  getCV(): Observable<any> {
    return this.http.get(
      Constants.apiEndPoint.candidate.getOneDocument.replace(
        ':id',
        this.authService.getCurrentUserId()
      ) + '?type=cv'
    );
  }

  uploadMotivationLetter(data: FormData): Observable<any> {
    return this.http.post(
      Constants.apiEndPoint.candidate.uploadDocument +
        '?type=motivation_letter',
      data
    );
  }

  getMotivationLetter(): Observable<any> {
    return this.http.get(
      Constants.apiEndPoint.candidate.getOneDocument.replace(
        ':id',
        this.authService.getCurrentUserId()
      ) + '?type=motivation_letter'
    );
  }
}
