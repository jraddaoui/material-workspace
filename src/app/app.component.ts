import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDesktop: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.breakpointObserver.observe('(min-width: 993px)').subscribe(result => {
      this.isDesktop = result.matches;
    });
  }
}
