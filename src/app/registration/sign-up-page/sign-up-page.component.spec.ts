import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPageComponent } from './sign-up-page.component';
import { SignUpPageModule } from './sign-up-page.module';
import { RegistrationService } from '../registration-service';
import { ApiModule } from 'src/app/api/api.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SignUpPageComponent', () => {
  let component: SignUpPageComponent;
  let fixture: ComponentFixture<SignUpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ApiModule,
        SignUpPageModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
      providers: [RegistrationService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
