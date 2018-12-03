import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';

import { UserCustomValidator } from '../user-custom-validator';
import { MyErrorStateMatcher } from './../../shared/MyErrorStateMatcher';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('myForm') myNgForm;
  newEmployeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore
  ) { }

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
  }

  createForm() {
    this.newEmployeeForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        employeeId: ['',
        [Validators.required],
        UserCustomValidator.uniqueEmployeeId(this.afs)
      ],
        nationalId: '',
        homeOffice: ['', [
          Validators.required,
          Validators.pattern('')
        ]],
        primaryPhone: '',
        secondaryPhone: '',
        roles: ['', [
          Validators.required,
          Validators.pattern('')
        ]],
        email: ['', [
          Validators.required,
          Validators.email],
          UserCustomValidator.uniqueEmployeeEmail(this.afs)
        ]
      });
  }

  save() {
    console.log('this.newEmployeeForm', this.newEmployeeForm);

  }


  get firstNameCtrl() {
    return this.newEmployeeForm.get('firstName');
  }

  get lastNameCtrl() {
    return this.newEmployeeForm.get('lastName');
  }

  get employeeIdCtrl() {
    return this.newEmployeeForm.get('employeeId');
  }

  get nationalIdCtrl() {
    return this.newEmployeeForm.get('nationalId');
  }

  get homeOfficeCtrl(){
    return this.newEmployeeForm.get('homeOffice');
  }

  get rolesCtrl(){
    return this.newEmployeeForm.get('roles');
  }

  get emailCtrl() {
    return this.newEmployeeForm.get('email');
  }
}
