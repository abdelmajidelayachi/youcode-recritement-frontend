import { Component } from '@angular/core';
import { UiDashboardService } from 'src/app/services/ui-dashboard.service';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.css']
})
export class DashboardNavbarComponent {
  showDropdown = false;

  constructor(private uiDashboard: UiDashboardService) { }


  handleShowDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  handleSidebarToggle(){
    this.uiDashboard.handleSidebarOpen();
  }

}
