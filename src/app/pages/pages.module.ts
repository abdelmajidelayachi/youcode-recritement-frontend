import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
  ]
})
export class PagesModule { }
