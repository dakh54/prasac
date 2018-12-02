import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { IUser } from '../users/models/iuser';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const user: IUser = JSON.parse(localStorage
        .getItem(this.authService.localStorageName));

    if (user !== null
      && user !== undefined) {
        this.authService.setUser(user);
      }

    if (!this.authService.user
        // || !this.authService.authenticated
        ) {
          this.router.navigate(['/login'], {
            queryParams: {
              returnUrl: state.url
            }
          });
          return false;
        }

    const role = next.data['role'];

    if (!role) {
      this.router.navigate(['/unauthorized'], {
        queryParams: {
          returnUrl: state.url
        }
      });
      return false;
    }

    if (this.authService.hasRole(role)) {
      return true;
    }

    return false;
  }
}
