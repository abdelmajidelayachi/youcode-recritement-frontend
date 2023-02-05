import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../shared/Constants';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {


  constructor(private http: HttpClient) { }

  getCandidates(page: number = 1) {
    return this.http.get(Constants.apiEndPoint.candidate.getCandidate + '?page=' + page);
  }

  updateCandidate(candidate: any) {
    return this.http.put(Constants.apiEndPoint.candidate.updateCandidate.replace(':id', candidate.id.toString()), candidate);
  }

  updateImage(candidateImage: any) {
    return this.http.put(Constants.apiEndPoint.candidate.updateCandidate.replace(':id', candidateImage.id.toString()), candidateImage);
  }
  
}
