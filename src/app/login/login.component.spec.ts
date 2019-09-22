import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { of } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { LoginComponent } from './login.component';
import { not } from '@angular/compiler/src/output/output_ast';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
  authServiceSpy.user = of(false);
  /*
   * Jasmine 3.5 will accept properties in `createSpyObj` as a third param:
   *
   * const authServiceSpy = jasmine.createSpyObj(
   *   'AuthService', ['logout'], {user: of(true)}
   * );
   *
   * https://github.com/jasmine/jasmine/pull/1722
   *
   */

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
      ],
      providers: [
        {provide: Router, useValue: routerSpy},
        {provide: AuthService, useValue: authServiceSpy},
      ],
      declarations: [ LoginComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authServiceSpy.login.calls.reset();
    routerSpy.navigate.calls.reset();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login', () => {
    component.loginForm.controls.email.setValue('test@example.com');
    component.loginForm.controls.password.setValue('test');
    component.loginForm.controls.remember.setValue(false);
    component.login();
    expect(authServiceSpy.login).toHaveBeenCalledWith('test@example.com', 'test', false);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['']);
  });

  it('should not login', () => {
    spyOnProperty(component.loginForm, 'invalid', 'get').and.returnValue(true);
    component.login();
    expect(authServiceSpy.login).not.toHaveBeenCalled();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });
});
