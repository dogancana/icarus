import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTextContent(): Promise<string> {
    return element(by.tagName('body')).getText() as Promise<string>;
  }
}
