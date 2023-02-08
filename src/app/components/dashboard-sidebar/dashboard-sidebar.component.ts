import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UiDashboardService } from 'src/app/services/ui-dashboard.service';
@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent {

  subscription$ !: Subscription;
  showSidebar = false;
  constructor(private uiDashboard: UiDashboardService, private authService: AuthService) { 
    this.subscription$ = this.uiDashboard.toggleSidebar$.subscribe((data:any) => {
      console.log(data)
      this.showSidebar = data;
    })
  }

  checkHasRole(role: string): boolean {
    return this.authService.checkHasRole(role);
  }





}
