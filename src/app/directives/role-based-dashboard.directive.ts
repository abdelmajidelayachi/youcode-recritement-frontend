import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnInit,
} from '@angular/core';
import { HasElementRef } from '@angular/material/core/typings/common-behaviors/color';
import { AuthService } from 'src/app/services/auth.service';

@Directive({ selector: '[appRoleBasedDashboard]' })
export class RoleBasedDashboardDirective implements OnInit {
  private hasView = false;

  @Input('appRoleBasedDashboard')
  rolecheck = '';

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.checkRole(this.rolecheck);
  }

  checkRole(rolecheck: any) {
    const isRole = this.auth.getRole();
    rolecheck = isRole;
    if (isRole === 'ROLE_ADMIN') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (isRole === 'ROLE_HR') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (isRole === 'ROLE_CANDIDATE') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  // @Input() set appRoleBasedDashboard(role: string) {
  //   if (!this.hasView) {
  //     if (role === 'admin') {
  //       this.viewContainer.createEmbeddedView(this.templateRef);
  //       this.hasView = true;
  //     } else if (role === 'hr') {
  //       this.viewContainer.createEmbeddedView(this.templateRef);
  //       this.hasView = true;
  //     } else if (role === 'candidate') {
  //       this.viewContainer.createEmbeddedView(this.templateRef);
  //       this.hasView = true;
  //     }
  //   } else {
  //     this.viewContainer.clear();
  //     this.hasView = false;
  //   }
  // }
}
