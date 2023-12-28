import { Component } from '@angular/core';
import {
  FormControl, FormGroup, ReactiveFormsModule, Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLoginData } from 'src/app/shared/models/login.module';
import { Location, NgIf } from '@angular/common';
import { checkStrongPassword } from 'src/app/shared/directives/checkStrongPassword.directive';
import { LoginService } from '../../services/login.service';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ReactiveFormsModule, NgIf],
})
export class LoginComponent {
  isLogged = false;

  loginForm = new FormGroup({
    login: new FormControl<string>('', [Validators.required, Validators.pattern(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    )]),
    password: new FormControl<string>('', [Validators.required, checkStrongPassword(8)]),
  });

  constructor(
    public loginService: LoginService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public location: Location,
  ) {
    this.isLogged = loginService.isLoggedIn;
  }

  formSubmit() {
    if (this.loginForm.value.login !== null && this.loginForm.value.password !== null) {
      this.loginService.login(this.loginForm.value as UserLoginData).subscribe(() => {
        if (this.loginService.isLoggedIn) {
          // eslint-disable-next-line no-alert
          alert('Successfull loged in');
          setTimeout(() => {
            this.router.navigateByUrl('/');
          }, 1200);
        }
      });
    }
    this.loginForm.reset();
  }

  logout() {
    this.loginService.logout();
    this.isLogged = false;
  }
}
