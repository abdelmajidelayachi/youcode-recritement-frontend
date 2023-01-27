import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../shared/Constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router) { }
  
  loginAuth(email: string, password: string){
    return this.http.post(Constants.apiEndPoint.auth.login, {email, password});
  }

  registerAuth(data:any){
    data.role = 'candidate';
    return this.http.post(Constants.apiEndPoint.auth.register, data);
  }

  setCredentials(token: any){
    if(token){
      localStorage.setItem('access_token', token);
      this.route.navigate(['/']);
    }
  }
  

  getCredentials(){
    return localStorage.getItem('access_token');
  }
  
}
