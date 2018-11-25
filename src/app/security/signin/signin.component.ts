import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from 'src/app/core/auth.service';
import { MyErrorStateMatcher } from 'src/app/shared/MyErrorStateMatcher';
import { IUser } from 'src/app/users/iuser';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  error: any;
  returnUrl: string;
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
          //  this.authService.setUser();

           let _user = this.fireStore.doc(`users/${this.afAuth.auth.currentUser.email}`);
            _user.valueChanges().subscribe(
              (data: IUser) => {
                this.authService.user = data;
                this.error = null;
                this.authService.setLocalStorage(data);
                this.router.navigate(['/home']);
              }, error => {
                console.log('error', error);
              });
         }
      ).catch(
        err => {
          console.log('err', err);
          this.error = err;
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
