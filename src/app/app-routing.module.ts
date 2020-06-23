import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home/home-routing.module';

const routes: Routes = [
  {
    path: '',
    component: HomeRoutingModule,
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
];

@NgModule({
  imports: [HomeModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
