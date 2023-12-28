import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { UserLoginData } from 'src/app/shared/models/login.module';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn = !!localStorage.getItem('userLogin');

  redirectUrl: string | null = null;

  userInfo = JSON.parse(localStorage.getItem('userLogin') || '{}') || {};

  login(userData:UserLoginData): Observable<boolean> {
    localStorage.setItem('userLogin', JSON.stringify(userData));

    return of(true).pipe(
      delay(1000),
      tap(() => { this.isLoggedIn = true; }),
    );
  }

  logout(): Observable<boolean> {
    localStorage.removeItem('userLogin');
    this.isLoggedIn = false;
    return of(true).pipe(
      delay(100),
      tap(() => { this.isLoggedIn = false; }),
    );
  }
}
