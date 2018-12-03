import { AutofillMonitor } from '@angular/cdk/text-field';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth.service';
import { InfoComponent } from 'src/app/shared/dialog/info/info.component';
import { MyErrorStateMatcher } from 'src/app/shared/MyErrorStateMatcher';
import { IUser } from 'src/app/users/models/iuser';
import { environment } from 'src/environments/environment';

import { ICredential } from '../icredential';
import { IError } from './../../shared/models/ierror';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  @ViewChild('myForm') myForm;
  loginForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  error: IError = {};
  returnUrl: string;
  userCollections = environment.userCollection;
  OnResetPassword = false;
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private fireStore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      forgetPassword: false
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParamMap.get(
      'returnUrl'
    );

    this.forgetPassword.valueChanges.subscribe((bol) => {
      if (bol) {
        this.OnResetPassword = true;
        this.error = {};
      } else {
        this.OnResetPassword = false;
        this.error = {};
        this.password.reset();
      }
    });
  }

  login() {
    this.error = {};
    if (this.loginForm.valid && this.OnResetPassword === false) {
      const credential: ICredential = {
        email: this.email.value,
        password: this.password.value
      };

      this.authService.signin(credential)
        .then((user) => {
          let _user = this.fireStore.doc(
            `${this.userCollections}/${this.afAuth.auth.currentUser.email}`
          );

          _user.valueChanges().pipe(
            take(1)
          ).subscribe(
            (data: IUser) => {
              if (data) {
                this.authService.user = Object.assign(
                  {},
                  {
                    id: data.id,
                    displayName: data.displayName,
                    photoURL: data.photoURL,
                    roles: data.roles
                  }
                );
                this.error = null;
                this.authService.setLocalStorage(this.authService.user);
                if (this.returnUrl) {
                  this.router.navigate([this.returnUrl]);
                } else {
                  this.router.navigate(['/home']);
                }
              } else {
                if (!this.error) {
                  this.error = {};
                }
                this.error.errorNumber = 404;
              }
            },
            (error) => {
              console.log('error', error);
              if (!this.error) {
                this.error = {};
              }
              this.error.errorNumber = 404;
            }
          );
        })
        .catch((err) => {
          console.log('err', err);
          this.error.errorNumber = 500;
          this.error.friendlyMessage = 'Internal server error';
        });
    }
  }

  resetPassword() {
    if (this.OnResetPassword === true) {
      this.error = {};
      const em = this.email.value;
      if (em) {
        this.afAuth.auth.sendPasswordResetEmail(this.email.value)
          .then(() => {
            this.openInfoDialog(
              `The password reset link has been sent` +
                ` to your email. Pleass follow the instruction` +
                ` in the email to reset your password.`
            );
          })
          .catch((error) => {
            console.log('error', error);
            this.error.errorNumber = 500;
            this.error.friendlyMessage = 'Internal server error';
          });
      }
    }
  }

  openInfoDialog(message: string) {
    const dialogRef = this.dialog.open(InfoComponent, {
      width: 'auto',
      height: 'auto',
      data: { message: message }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.myForm.resetForm();
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get forgetPassword() {
    return this.loginForm.get('forgetPassword');
  }
}
