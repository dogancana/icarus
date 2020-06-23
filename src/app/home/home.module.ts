import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { HomeRoutingModule } from './home-routing.module';
import { UILibModule } from '../ui-lib/ui-lib.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [HomeRoutingModule, CommonModule, UILibModule],
})
export class HomeModule {}
