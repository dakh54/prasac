import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from 'src/app/core/auth.service';
import { MyErrorStateMatcher } from 'src/app/shared/MyErrorStateMatcher';
import { IUser } from 'src/app/users/models/iuser';
import { environment } from 'src/environments/environment';

import { IError } from './../../shared/models/ierror';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  error: IError = {};
  returnUrl: string;
  userCollections = environment.userCollection;

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private fireStore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
      this.loginForm = this.fb.group({
        email: ['', [
          Validators.required,
          Validators.email
        ]],
        password: ['', [Validators.required]]
      });

      this.returnUrl = this.activatedRoute
        .snapshot.queryParamMap.get('returnUrl');
  }

  login() {
    if (this.loginForm.valid) {
      const credential = Object.assign({}, this.loginForm.value)
      this.authService.signin(credential)
      .then(
         user => {
           let _user = this.fireStore.doc(`${this.userCollections}/${this.afAuth.auth.currentUser.email}`);
            _user.valueChanges().subscribe(
              (data: IUser) => {
                if (data) {
                  this.authService.user = Object.assign({},{
                    id: data.id,
                    displayName: data.displayName,
                    photoURL: data.photoURL,
                    roles: data.roles
                  });
                  this.error = null;
                  this.authService.setLocalStorage(this.authService.user);
                  this.router.navigate(['/home']);
                } else {
                  this.error.errorNumber = 404;
                }
              }, error => {
                console.log('error', error);
                this.error.errorNumber = 404;
              });
         }
      ).catch(
        err => {
          console.log('err', err);
          this.error.errorNumber = 500;
          this.error.friendlyMessage = "Internal server error";
        }
      )
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }


}
