import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiDashboardService {

  sidebarOpen = false;

  toggleSidebar$ = new Subject();


  handleSidebarOpen() {
    this.sidebarOpen = !this.sidebarOpen;
    this.toggleSidebar$.next(this.sidebarOpen);
  }

  constructor() { }
}
