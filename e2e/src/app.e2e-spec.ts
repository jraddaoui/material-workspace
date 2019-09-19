import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

interface Padding {
  x: number;
  y: number;
}

const GET_PADDING_SCRIPT = 'return {'
  + 'x: window.outerWidth - window.innerWidth,'
  + 'y: window.outerHeight - window.innerHeight };';

describe('workspace-project App', () => {
  let page: AppPage;
  let padding: Padding;

  beforeEach(() => {
    page = new AppPage();
    browser.executeScript(GET_PADDING_SCRIPT).then((result: Padding) => {
      padding = result;
    });
  });

  it('should display toolbar with primary color', () => {
    page.navigateTo();
    expect(page.getToolbarColor()).toEqual('primary');
  });

  it('should display sidenav', () => {
    page.navigateTo();
    browser.manage().window().setSize(993 + padding.x, 720 + padding.y);
    expect(page.getSidenavClassList()).toContain('mat-drawer-side');
    expect(page.getSidenavClassList()).toContain('mat-drawer-opened');
  });

  it('should hide sidenav', () => {
    page.navigateTo();
    browser.manage().window().setSize(992 + padding.x, 720 + padding.y);
    expect(page.getSidenavClassList()).toContain('mat-drawer-over');
    expect(page.getSidenavClassList()).not.toContain('mat-drawer-opened');
  });

  it('should open sidenav', () => {
    page.navigateTo();
    browser.manage().window().setSize(992 + padding.x, 720 + padding.y);
    page.clickHeaderMenuButton();
    expect(page.getSidenavClassList()).toContain('mat-drawer-over');
    expect(page.getSidenavClassList()).toContain('mat-drawer-opened');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
