import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getToolbarColor() {
    return element(by.css('app-root mat-toolbar')).getAttribute('color') as Promise<string>;
  }
}
