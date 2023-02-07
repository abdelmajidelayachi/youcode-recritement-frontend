import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckRoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const roles = this.authService.getAuthorities();
      if(!roles){
        this.router.navigate(['/auth/login']);
        return false;
      }
      if(this.isAuthorized(route)){
        return true;
      }
      this.redirectAfterNotAuthorized();
      return false;

  }
  isAuthorized(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles = route.data['expectedRole'];
    const userRoles = this.authService.getAuthorities();
    if (!userRoles || userRoles.length === 0) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    if (!expectedRoles || expectedRoles.length === 0) {
      return true;
    }
    return userRoles.some(userRole => expectedRoles.includes(userRole));
  }

  redirectAfterNotAuthorized(): void {
    const userRoles = this.authService.getAuthorities();
    if(!userRoles){
      this.router.navigate(['/auth/login']);
      return;
    }

    if (userRoles.includes('ROLE_ADMIN') || userRoles.includes("ROLE_HR")) {
      this.router.navigate(['/dashboard']);
      return;
    }
    
    if (userRoles.includes('ROLE_CANDIDATE')) {
      this.router.navigate(['/']);
      return;
    }
  }
  
}
