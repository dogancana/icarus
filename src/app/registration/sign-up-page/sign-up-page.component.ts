import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { RegistrationService } from '../registration-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent {
  submitting = false;
  submitted = false;
  submitError: HttpErrorResponse;
  constructor(private service: RegistrationService, private router: Router) {}

  async onSubmit(data: { firstName: string; lastName: string; email: string }) {
    this.submitError = null;
    this.submitting = true;
    try {
      await this.service.submit(data);
    } catch (e) {
      this.submitError = e;
      this.submitting = false;
      return;
    }
    this.submitting = false;
    this.submitted = true;
  }

  navigateHome() {
    this.router.navigate(['']);
  }
}
