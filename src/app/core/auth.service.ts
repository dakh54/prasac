import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

import { ICredential } from '../security/icredential';
import { IUser } from '../users/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated = false;
  user: IUser = null;
  localStorageName = 'prasac_lori';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.afAuth.auth.onAuthStateChanged(_user => {
      if (_user) {
        this.authenticated = true;
      } else {
        this.resetState();
      }
    })

  }

  hasRole(role: string) {
    if (this.user.roles && this.user.roles.indexOf(role) >= 0) {
      return true;
    }
    return false;
  }

  signin(credential: ICredential): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword
    (credential.email, credential.password);
  }

  signout() {
    this.resetState();
    this.afAuth.auth.signOut();
    this.router.navigate(['/signin']);
  }

  resetState() {
    this.authenticated = false;
    this.user = null;
  }

  getFirstName(): string {
    if (this.user) {
      return this.user.displayName.substring(0, this.user.displayName.indexOf(' '));
    }
    return '';
  }

  setUser(user: IUser) {
    if (user) {
      this.user = user;
    }
  }

  setLocalStorage(user: IUser) {
    localStorage.setItem(this.localStorageName, JSON.stringify(user));
  }

  clearLocalStorage() {
    localStorage.removeItem(this.localStorageName);
  }
}
