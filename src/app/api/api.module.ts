import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConfigModule } from '../config/config.module';
import { ApiService } from './api.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule, CommonModule, ConfigModule],
  providers: [ApiService],
})
export class ApiModule {}
