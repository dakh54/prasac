import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { merge } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { ICredential } from '../security/icredential';
import { IUser } from '../users/models/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated = false;
  user: IUser = null;
  localStorageName = 'prasac_lori';
  userCollection = environment.userCollection;

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

  updatePictureUrl(photoURL: string) {
    this.user.photoURL = photoURL;
    const db = firebase.firestore();
    db.settings({timestampsInSnapshots: true});
    console.log('this.user', this.user);
    console.log('this.user.email', this.user.email);
    console.log('this.userCollection', this.userCollection);

    // return db.collection(this.userCollection).doc(this.user.email).get();
    const docRef = db.collection(this.userCollection).doc(this.user.email);
    return docRef.update({
      photoURL: photoURL
    });
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
