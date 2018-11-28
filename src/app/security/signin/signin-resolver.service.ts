import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from 'src/app/core/auth.service';


@Injectable({
  providedIn: 'root'
})
export class SigninResolverService implements Resolve<any> {

  constructor(
    private authService: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    // console.log('in resolver (ctor) this.authService.authenticated', this.authService.authenticated);
   }

  resolve() {

    // // this.authService.signout();
    // // return true;

    // console.log('afAuth', this.afAuth);

    // console.log('in resolver - this authservice', this.authService);
    // console.log('in resolver this.authService.authenticated', this.authService.authenticated);


    // if (this.authService.authenticated) {

    //   const user: IUser = JSON.parse(localStorage.getItem(this.authService.localStorageName));
    //   console.log('user', user);

    //   if (!user) {
    //     this.authService.signout();
    //     return true;
    //   }

    //   if (!this.authService.user) {
    //     this.authService.setUser(user);
    //   }
    //   this.router.navigate(['/home']);
    //   return false;
    // }
    // this.authService.clearLocalStorage();
    // return true;
    // }
  }
}
