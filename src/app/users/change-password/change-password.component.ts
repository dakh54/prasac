import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from './../../core/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  hide = true;
  hideConfirm = true;
  changePasswordForm: FormGroup;

  @ViewChild('passwordView') passwordView: ElementRef;
  @ViewChild('passwordConfirmView') passwordConfirmView: ElementRef;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.changePasswordForm = this.fb.group({
      password: [
        '',
        [
          Validators.required
        ]
      ],
      passwordConfirm: [
        '',
        [
          Validators.required
        ]
      ]
    })
  }

  save() {
    if (this.changePasswordForm.valid &&
          this.password.value === this.passwordConfirm.value) {
            this.authService.updatePassWord(this.passwordConfirm.value)
              .then(
                () => {
                  this.toastr.success('Save successfully');
                  this.dialogRef.close();
                  this.authService.signout();
                })
              .catch(error => {
                this.toastr.error(error.message);
                console.log('error', error);
              })
          }
  }

  noClick() {
    this.dialogRef.close();
  }

  focusPasswordConfirm(event) {
    if ( event.keyCode === 13) {
      event.preventDefault();
      if (this.password.value.trim() !== '') {
        this.passwordConfirmView.nativeElement.focus();
      }
    }
  }

  get password() {
    return this.changePasswordForm.get('password');
  }

  get passwordConfirm() {
    return this.changePasswordForm.get('passwordConfirm');
  }

}
