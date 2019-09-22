import { browser, by, element } from 'protractor';

export class AppPage {
  login() {
    browser.get(browser.baseUrl + 'login');
    element(by.css('input[type=email]')).sendKeys('test@example.com');
    element(by.css('input[type=password]')).sendKeys('test');
    return element(by.css('button[type="submit"]')).click() as Promise<void>;
  }

  getToolbarColor() {
    return element(by.css('app-root mat-toolbar')).getAttribute('color') as Promise<string>;
  }

  getSidenavClassList() {
    return element(by.css('app-root mat-sidenav')).getAttribute('class') as Promise<string>;
  }

  clickHeaderMenuButton() {
    return element(by.css('app-root mat-toolbar button:first-of-type')).click() as Promise<void>;
  }
}
