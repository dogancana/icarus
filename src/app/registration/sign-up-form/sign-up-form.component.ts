import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import {
  lowerAndUpperCharacters,
  noNamesInPassword,
} from './sign-up-form.validators';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  passwordErrorStateMatcher = new PasswordErrorStateMatcher();
  signUpForm = this.fb.group(
    {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: [
        '',
        [Validators.required, Validators.min(8), lowerAndUpperCharacters],
      ],
      // email validator regex looks fine
      // https://github.com/angular/angular/blob/master/packages/forms/src/validators.ts
      email: ['', [Validators.required, Validators.email]],
    },
    { validators: noNamesInPassword }
  );

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.warn(this.signUpForm.value);
  }
}

class PasswordErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return (control.dirty && control.errors) || form?.errors?.noNamesInPassword;
  }
}
