import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { IError } from '../shared/models/ierror';
import { AuthService } from './auth.service';



@Injectable()
export class RedirectService {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  redirect(Error: IError): void {
    const _errorNumber = Error.errorNumber;
    if (_errorNumber === 403) {
      this.router.navigate(['/forbidden']);
    } else if (_errorNumber === 401) {
      this.router.navigate(['/unauthorized']);
    } else {
      this.router.navigate(['/page-not-found']);
    }
  }
}
