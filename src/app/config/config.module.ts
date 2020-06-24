import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
const prodConfig = {
  apiEndpoint: 'https://demo-api.now.sh',
};
const localConfig = {
  apiEndpoint: 'https://demo-api.now.sh',
};
export type AppConfig = typeof prodConfig & typeof localConfig;
const appConfig: AppConfig = environment.production ? prodConfig : localConfig;

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: appConfig,
    },
  ],
})
export class ConfigModule {}
