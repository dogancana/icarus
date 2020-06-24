import { RegistrationRoutingModule } from './registration-routing.module';
import { NgModule } from '@angular/core';
import { RegistrationService } from './registration-service';
import { ApiModule } from '../api/api.module';

@NgModule({
  imports: [RegistrationRoutingModule, ApiModule],
  providers: [RegistrationService],
})
export class RegistrationModule {}
