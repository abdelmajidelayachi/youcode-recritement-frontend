import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authService.getCredentials()){
        return true;
      }else{
        const role = this.authService.getAuthorities();
        if(role.includes('ROLE_CANDIDATE')) {
          this.router.navigate(['/home']);
        }
        if(role.includes('ROLE_ADMIN') || role.includes('ROLE_HR')) {
          this.router.navigate(['/dashboard']);
        }
        return false;
      }
  }
  
}
