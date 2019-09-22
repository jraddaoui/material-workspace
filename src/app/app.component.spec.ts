import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AuthService } from './auth/auth.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const authServiceSpy = jasmine.createSpyObj('AuthService', ['logout']);
  authServiceSpy.user = of(true);
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
    @Component({selector: 'app-navigation', template: ''})
    class NavigationStubComponent { }

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
      ],
      providers: [
        {provide: Router, useValue: routerSpy},
        {provide: AuthService, useValue: authServiceSpy},
      ],
      declarations: [
        AppComponent,
        NavigationStubComponent,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout', () => {
    component.logout();
    expect(authServiceSpy.logout).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['login']);
  });
});
