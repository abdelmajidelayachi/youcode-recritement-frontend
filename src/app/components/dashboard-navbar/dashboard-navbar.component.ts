import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UiDashboardService } from 'src/app/services/ui-dashboard.service';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.css'],
})
export class DashboardNavbarComponent {
  showDropdown = false;
  currentUserString: any = localStorage.getItem('currentUser');
  currentUser: any = JSON.parse(this.currentUserString);

  constructor(
    private uiDashboard: UiDashboardService,
    private router: Router,
    private authService: AuthService
  ) {}

  handleShowDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  handleSidebarToggle() {
    this.uiDashboard.handleSidebarOpen();
  }

  checkHasRole(role: string): boolean {
    return this.authService.checkHasRole(role);
  }

  handleLogout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}
