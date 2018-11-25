import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/auth.guard';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './security/signin/signin.component';
import { ForbiddenComponent } from './shared/error/forbidden/forbidden.component';
import { PageNotFoundComponent } from './shared/error/page-not-found/page-not-found.component';
import { UnauthorizedComponent } from './shared/error/unauthorized/unauthorized.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'users',
    loadChildren: './users/user.module#UserModule'
  },
  {
    path: 'leads',
    loadChildren: './leads/lead.module#LeadModule'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'CanAccessHome'
    }
  },
  {
    path: 'branches',
    loadChildren: './branches/branch.module#BranchModule'
  },
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
