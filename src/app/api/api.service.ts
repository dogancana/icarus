import { APP_CONFIG } from './../config/config.module';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { AppConfig } from '../config/config.module';

@Injectable()
export class ApiService {
  private config: AppConfig;
  constructor(@Inject(APP_CONFIG) config: AppConfig, private http: HttpClient) {
    this.config = config;
  }

  post(path: string, body: any) {
    return this.http.post(`${this.config.apiEndpoint}/${path}`, body, {
      observe: 'events',
      responseType: 'json',
    });
  }
}
