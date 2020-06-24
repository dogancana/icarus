import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Injectable()
export class RegistrationService {
  constructor(private api: ApiService) {}

  async submit(data: { firstName: string; lastName: string; email: string }) {
    await this.api.post('users', data).toPromise();
  }
}
