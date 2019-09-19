import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getToolbarColor() {
    return element(by.css('app-root mat-toolbar')).getAttribute('color') as Promise<string>;
  }

  getSidenavClassList() {
    return element(by.css('app-root mat-sidenav')).getAttribute('class') as Promise<string>;
  }

  clickHeaderMenuButton() {
    return element(by.css('app-root mat-toolbar button')).click() as Promise<void>;
  }
}
