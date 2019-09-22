import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject = new BehaviorSubject<boolean>(false);
  user: Observable<boolean> = this.userSubject.asObservable();

  login(email: string, password: string, remember: boolean): void {
    this.userSubject.next(true);
  }

  logout(): void {
    this.userSubject.next(false);
  }
}
