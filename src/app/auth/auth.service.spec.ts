import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(AuthService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should login a user', () => {
    service.login('test@example.com', 'test', false);
    service.user.subscribe((user: boolean) => {
      expect(user).toBeTruthy();
    });
  });

  it('should logout a user', () => {
    service.logout();
    service.user.subscribe((user: boolean) => {
      expect(user).toBeFalsy();
    });
  });
});
