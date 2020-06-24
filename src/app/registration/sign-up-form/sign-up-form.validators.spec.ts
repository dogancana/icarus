import {
  lowerAndUpperCharacters,
  noNamesInPassword,
} from './sign-up-form.validators';
import { FormBuilder } from '@angular/forms';

describe('sign-up-form.validators', () => {
  describe('lowerAndUpperCharacters', () => {
    it('should work for expected inputs', () => {
      const testValues = [
        { value: 'aaa' },
        { value: 'AAA' },
        { value: '000' },
        { value: 'aA', passes: true },
      ];

      testValues.forEach((v) => {
        expect(lowerAndUpperCharacters(v as any)).toEqual(
          v.passes ? null : { lowerAndUpperCharacters: { value: v.value } }
        );
      });
    });
  });

  describe('noNamesInPassword', () => {
    it('should work for expected inputs', () => {
      const fb = new FormBuilder();
      const testValues = [
        {
          f: fb.group({ firstName: [''], lastName: [''], password: [''] }),
        },
        {
          f: fb.group({
            firstName: ['Name'],
            lastName: ['surname'],
            password: ['Passw0rd'],
          }),
        },
        {
          f: fb.group({
            firstName: ['Name'],
            lastName: ['Surname'],
            password: ['123NAME123'],
          }),
          error: true,
        },
      ];
      testValues.forEach(({ f, error }) => {
        expect(noNamesInPassword(f)).toEqual(
          error
            ? { noNamesInPassword: { value: f.get('password').value } }
            : null
        );
      });
    });
  });
});
