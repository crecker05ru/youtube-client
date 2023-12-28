import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { MainComponent } from './core/pages/main/main.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { DetailedInformationComponent } from './core/pages/detailed-information/detailed-information.component';
// import { LoginComponent } from './core/pages/login/login.component';
import { loginGuard } from './core/guards/login.guard';
import { AdminComponent } from './auth/pages/admin/admin.component';
import { FavoriteComponent } from './core/pages/favorite/favorite.component';
// import { AuthModule } from './auth/auth.module';

// const loggedUser: Routes = [
//   {
//     path: '',
//     component: MainComponent,
//     canActivate: [loginGuard],
//     children: [
//       { path: 'detailed-information', component: DetailedInformationComponent },
//     ],
//   },
//   // { path: '**', component: PageNotFoundComponent },
// ];

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [loginGuard],
    // children: [
    //   { path: 'detailed-information', component: DetailedInformationComponent },
    // ],
    // children: [
    //   { path: 'login', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
    // ],
  },
  { path: 'detailed-information/:id', component: DetailedInformationComponent, canActivate: [loginGuard] },
  { path: 'favorite', component: FavoriteComponent, canActivate: [loginGuard] },
  // { path: 'login', component: LoginComponent },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  { path: 'admin', component: AdminComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes)],
})
export class AppRoutingModule { }
