import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SignUpPageModule } from './sign-up-page/sign-up-page.module';

const routes: Routes = [
  {
    path: 'sign-up',
    component: SignUpPageComponent,
  },
  {
    path: '**',
    redirectTo: 'sign-up',
  },
];

@NgModule({
  imports: [SignUpPageModule, RouterModule.forChild(routes)],
  exports: [],
})
export class RegistrationRoutingModule {}
