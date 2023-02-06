import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
  ) {}

  handleShowDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  handleSidebarToggle() {
    this.uiDashboard.handleSidebarOpen();
  }

  handleLogout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/auth/login']);
  }
}
