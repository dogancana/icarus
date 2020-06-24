import { browser, by, element } from 'protractor';

export class RegistrationPage {
  navigateTo(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}/registration/sign-up`) as Promise<
      unknown
    >;
  }

  getTextContent(): Promise<string> {
    return element(by.tagName('body')).getText() as Promise<string>;
  }

  fillForm({ firstName, lastName, password, email }) {
    element(by.css('input[formcontrolname=firstName]')).sendKeys(firstName);
    element(by.css('input[formcontrolname=lastName]')).sendKeys(lastName);
    element(by.css('input[formcontrolname=password]')).sendKeys(password);
    element(by.css('input[formcontrolname=email]')).sendKeys(email);
  }

  submitForm() {
    element(by.css('button[type=submit')).click();
  }
}
