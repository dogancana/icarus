import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFormComponent } from './sign-up-form.component';
import { SignUpFormModule } from './sign-up-form.module';
import { RegistrationService } from '../registration-service';

describe('SignUpFormComponent', () => {
  let component: SignUpFormComponent;
  let fixture: ComponentFixture<SignUpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SignUpFormModule, BrowserAnimationsModule],
      providers: [RegistrationService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render expected input fields', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('input').length).toBe(4);
    const str = compiled.querySelector('form').textContent;
    expect(str).toContain('First name');
    expect(str).toContain('Last name');
    expect(str).toContain('Password');
    expect(str).toContain('Email');
  });
});
