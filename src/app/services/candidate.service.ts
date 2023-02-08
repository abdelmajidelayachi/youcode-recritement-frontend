import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../shared/Constants';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

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

  getCV(userId:any): Observable<any> {
    return this.http.get(
      Constants.apiEndPoint.candidate.getOneDocument.replace(
        ':id',
        userId
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

  getImageProfile(imageProfile: String) {
    return imageProfile;
  }
  getCandidates(page: number = 1) {
    return this.http.get(
      Constants.apiEndPoint.candidate.getCandidates + '?page=' + page
    );
  }

  updateCandidate(candidate: any) {
    return this.http.put(
      Constants.apiEndPoint.candidate.updateCandidate.replace(
        ':id',
        candidate.id.toString()
      ),
      candidate
    );
  }

  updateImage(candidateImage: any) {
    return this.http.put(
      Constants.apiEndPoint.candidate.updateCandidate.replace(
        ':id',
        candidateImage.id.toString()
      ),
      candidateImage
    );
  }
}
