import { AuthService } from 'src/app/services/auth.service';
import { Constants } from './../shared/Constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  public getAuthHeaders() {
    return new HttpHeaders().set(
      'Authorization',
      'Bearer ' + this.authService.getCredentials()
    );
  }

  getOneCandidate(idCandidate: String) {
    return this.http.get(
      Constants.apiEndPoint.candidate.getCandidate.replace(
        ':id',
        idCandidate.toString()
      ),
      { headers: this.getAuthHeaders() }
    );
  }
}
