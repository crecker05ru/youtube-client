import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../../auth/services/login.service';

export const loginGuard: CanActivateFn = () => {
  const loginService = inject(LoginService);
  const rout = inject(Router);
  if (loginService.isLoggedIn) {
    return true;
  }
  return rout.parseUrl('/login');
};
