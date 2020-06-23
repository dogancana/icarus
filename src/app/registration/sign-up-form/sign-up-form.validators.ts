import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const lowerAndUpperCharacters: ValidatorFn = (
  control: AbstractControl
): ValidationErrors => {
  const passed = /[a-z]/.test(control.value) && /[A-Z]/.test(control.value);
  return passed ? null : { lowerAndUpperCharacters: { value: control.value } };
};

export const noNamesInPassword: ValidatorFn = (
  formGroup: AbstractControl
): ValidationErrors => {
  const firstName = formGroup.get('firstName');
  const lastName = formGroup.get('lastName');
  const password = formGroup.get('password');

  if (!firstName.value || !lastName.value) {
    return null;
  }

  const checkStr = (s: AbstractControl) => s.value.toUpperCase();
  const passwordStr = checkStr(password);

  const forbidden =
    passwordStr.indexOf(checkStr(firstName)) > -1 ||
    passwordStr.indexOf(checkStr(lastName)) > -1;

  return forbidden ? { noNamesInPassword: { value: password.value } } : null;
};
