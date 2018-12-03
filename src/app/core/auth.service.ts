import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { ICredential } from '../security/icredential';
import { IUser } from '../users/models/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated = false;
  user: IUser = null;
  localStorageName = 'prasac_lori';
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) {

    this.afAuth.auth.onAuthStateChanged((_user) => {
      if (_user) {
        this.authenticated = true;
      } else {
        this.resetState();

      }
    });
  }

  updatePassWord(newPassword: string) {
    return firebase.auth().currentUser.updatePassword(newPassword);
  }

  hasRole(role: string) {
    if (this.user && this.user.roles && this.user.roles.indexOf(role) >= 0) {
      return true;
    }
    return false;
  }

  signin(credential: ICredential): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(
      credential.email,
      credential.password
    );
  }

  signout() {
   this.afAuth.auth.signOut();
  }

  resetState() {
    if (this.authenticated) {
      this.authenticated = false;
      this.user = null;
      this.clearLocalStorage();
    }


    if (this.router.url !== '/signin') {
      this.router.navigate(['/signin']);
    }
  }

  getFirstName(): string {
    if (this.user) {
      return this.user.displayName.substring(
        0,
        this.user.displayName.indexOf(' ')
      );
    }
    return '';
  }

  setUser(user: IUser) {
    if (user) {
      this.user = Object.assign({}, user);
    }
  }

  setLocalStorage(user: IUser) {
    localStorage.setItem(this.localStorageName, JSON.stringify(user));
  }

  clearLocalStorage() {
    localStorage.removeItem(this.localStorageName);
  }
}
