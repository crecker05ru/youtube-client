import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginService } from './services/login.service';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LoginComponent,
    AdminComponent,
    RouterModule.forChild(routes),
  ],
  providers: [LoginService],
  exports: [RouterModule],
})
export class AuthModule { }
