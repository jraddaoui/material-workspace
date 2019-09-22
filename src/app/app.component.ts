import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav', {static: false}) sidenav: any;

  isDesktop: boolean;
  userLoggedIn: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.breakpointObserver.observe('(min-width: 993px)').subscribe(result => {
      this.isDesktop = result.matches;
    });
    this.authService.user.subscribe(result => {
      this.userLoggedIn = result;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
