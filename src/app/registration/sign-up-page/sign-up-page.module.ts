import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpPageComponent } from './sign-up-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SignUpFormModule } from '../sign-up-form/sign-up-form.module';

@NgModule({
  declarations: [SignUpPageComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    SignUpFormModule,
    RouterModule,
  ],
})
export class SignUpPageModule {}
