import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[appRoleBasedDashboard]' })
export class RoleBasedDashboardDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appRoleBasedDashboard(role: string) {
    if (!this.hasView) {
      if (role === 'admin') {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else if (role === 'hr') {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else if (role === 'candidate') {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      }
    } else {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}