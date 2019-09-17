import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private desktopQueryListener: () => void;
  desktopQuery: MediaQueryList;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
  ) { }

  ngOnInit(): void {
    this.desktopQueryListener = () => this.changeDetectorRef.detectChanges();
    this.desktopQuery = this.media.matchMedia('(min-width: 993px)');
    // The onchange property of the MediaQueryList
    // interface is not available in Safari nor IE.
    // tslint:disable-next-line: deprecation
    this.desktopQuery.addListener(this.desktopQueryListener);
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.desktopQuery.removeListener(this.desktopQueryListener);
  }
}
