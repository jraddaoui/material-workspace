import { async, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { AuthService } from './auth.service';
import { UnAuthGuard } from './un-auth.guard';

describe('AuthGuard', () => {
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  let authService: AuthService;
  let guard: UnAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnAuthGuard, {provide: Router, useValue: routerSpy}]
    });
    guard = TestBed.get(UnAuthGuard);
    authService = TestBed.get(AuthService);
    routerSpy.navigate.calls.reset();
  });

  it('should create', () => {
    expect(guard).toBeTruthy();
  });

  it('should navigate to home page', async(() => {
    authService.user = of(true);
    guard.canActivate(null, null).subscribe((result: boolean) => {
      expect(result).toBeFalsy();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['']);
    });
  }));

  it('should not navigate', async(() => {
    authService.user = of(false);
    guard.canActivate(null, null).subscribe((result: boolean) => {
      expect(result).toBeTruthy();
      expect(routerSpy.navigate).not.toHaveBeenCalled();
    });
  }));
});
