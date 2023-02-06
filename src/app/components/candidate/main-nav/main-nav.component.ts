import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  constructor(private router: Router) {}
  checkUrl: string = '';
  ngOnInit(): void {
    this.checkUrl = this.router.url;
  }
}
