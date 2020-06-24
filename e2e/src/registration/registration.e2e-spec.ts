import { browser, logging } from 'protractor';
import { RegistrationPage } from './registration.po';

fdescribe('workspace-project App', () => {
  let page: RegistrationPage;

  beforeEach(() => {
    page = new RegistrationPage();
  });

  it('should display registration form', () => {
    page.navigateTo();
    expect(page.getTextContent()).toContain('First name');
    expect(page.getTextContent()).toContain('Last name');
    expect(page.getTextContent()).toContain('Password');
    expect(page.getTextContent()).toContain('Email');
  });

  it('should submit data and show success message', () => {
    page.navigateTo();
    page.fillForm({
      firstName: 'Dogancan',
      lastName: 'Arabaci',
      password: 'Passw0rd',
      email: 'dogancan.arabaci@gmail.com',
    });
    page.submitForm();
    expect(page.getTextContent()).toContain(
      'Your registration handled with success.'
    );
  });

  it('should show password error', () => {
    page.navigateTo();
    page.fillForm({
      firstName: 'Dogancan',
      lastName: 'Arabaci',
      password: 'Passw0rddogancan',
      email: 'dogancan.arabaci@gmail.com',
    });
    expect(page.getTextContent()).toContain(
      'Password cannot contain your name.'
    );
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
