import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BranchService } from 'src/app/branches/branch.service';
import { IBranch } from 'src/app/branches/ibranch';
import { FormBuilderHelper } from 'src/app/shared/form-builder-helper';
import { MyErrorStateMatcher } from 'src/app/shared/MyErrorStateMatcher';
import { GetUniqueLeadId } from 'src/app/shared/unique-id-generator';
import { MinDateValidator } from 'src/app/shared/validator-custom';

import { LeadService } from '../lead.service';
import { AuthService } from './../../core/auth.service';
import { UserCustomValidator } from './../../users/user-custom-validator';
import { UserService } from './../../users/user.service';
import { ILeadCreate } from './../models/ilead-create';


@Component({
  selector: 'app-lead-new',
  templateUrl: './lead-new.component.html',
  styleUrls: ['./lead-new.component.scss']
})
export class LeadNewComponent implements OnInit {
  newLeadForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  minDate = new Date();


  @ViewChild('requestedServiceDateView') requestedServiceDateView: ElementRef;
  @ViewChild('firstNameView') firstNameView: ElementRef;
  @ViewChild('lastNameView') lastNameView: ElementRef;
  @ViewChild('emailView') emailView: ElementRef;
  @ViewChild('locationNumberView') locationNumberView: ElementRef;
  @ViewChild('streetView') streetView: ElementRef;
  @ViewChild('villageView') villageView: ElementRef;
  @ViewChild('communeView') communeView: ElementRef;
  @ViewChild('khanView') khanView: ElementRef;
  @ViewChild('cityView') cityView: ElementRef;
  @ViewChild('primaryPhoneView') primaryPhoneView: ElementRef;
  @ViewChild('secondaryPhoneView') secondaryPhoneView: ElementRef;
  @ViewChild('thirdPhoneView') thirdPhoneView: ElementRef;
  @ViewChild('commentView') commentView: ElementRef;
  @ViewChild('newLeadNgForm') newLeadNgForm;

  checkBoxValues: string [] = ['loan'];
  branches: Observable<IBranch []>;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    public branchService: BranchService,
    private leadService: LeadService) {}

  ngOnInit() {
    this.createLeadForm();
    this.branches = this.branchService.GetBranches();

    this.setFormValue();

    this.loan.valueChanges.subscribe(
      data => {
        if (data) {
          this.checkBoxValues.push('loan');
        } else {
          this.checkBoxValues.splice(this.checkBoxValues.indexOf('loan'), 1);
        }
      });

    this.saving.valueChanges.subscribe(
      data => {
        if (data) {
          this.checkBoxValues.push('saving');
        } else {
          this.checkBoxValues.splice(this.checkBoxValues.indexOf('saving'), 1);
        }
      });


  }

  private setFormValue() {
    this.firstName.setValue('K1');
    this.lastName.setValue('L1');
    this.email.setValue('kl@gmail.com');
    this.locationNumber.setValue('134A');
    this.street.setValue('150');
    this.khan.setValue('Toul Kork');
    this.primaryPhone.setValue('012 946 046');
    this.secondaryPhone.setValue('469 980 0027');
    this.thirdPhone.setValue('015 834 314');
  }

  save() {
    if (this.newLeadForm.valid) {

      // let newLead = Object.assign({}, this.newLeadForm.value);
      const branch: IBranch = this.city.value;
      // const leadId = GetUniqueLeadId(branch.code);

      const newLead: ILeadCreate = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        requestedServices: this.checkBoxValues,
         //FormBuilderHelper.getCheckBoxValues(
          // this.requestedServices.value
        //),
        requestedServiceDate: this.requestedServiceDate.value,
        status: 'new',
        address: {
          locationNumber: this.locationNumber.value,
          street: this.street.value,
          village: this.village.value,
          commune: this.commune.value,
          khan: this.khan.value,
          city: this.city.value.branch
        },
        phones: this.phones.value,
        email: this.email.value,
        comment: this.email.value,
        createdBy: {
          id: this.authService.user.id,
          displayName: this.authService.user.displayName
        },
        branchCode: this.city.value.code

      };
      this.leadService.Add(newLead).then(
        suc => {
          console.log('Succesfully save');
          this.resetForm();
        }
      ).catch(err => {
        console.log('Error in add new lead', err);
      })
    }
  }

  createLeadForm() {
    this.newLeadForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email]],
      requestedServices: FormBuilderHelper.createServiceRequestedForm(this.fb),
      requestedServiceDate: [this.minDate, [MinDateValidator(this.minDate)]],
      address: FormBuilderHelper.createAddressForm(this.fb),
      phones: FormBuilderHelper.createPhonesForm(this.fb),
      comment: ''
    });
  }

  resetForm() {
    this.newLeadNgForm.resetForm();
    this.loan.setValue('loan');
    this.requestedServiceDate.setValue(this.minDate);
  }

  displayBranch(branch: IBranch) {
    return branch.branch;
  }

  focusFirstNameField(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      // if (this.requestedServiceDate.value.trim() !== '') {
      this.firstNameView.nativeElement.focus();
      // }
    }
  }

  focusLastNameField(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      if (this.firstName.value.trim() !== '') {
        this.lastNameView.nativeElement.focus();
      }
    }
  }

  focusEmailField(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      if (this.lastName.value.trim() !== '') {
        this.emailView.nativeElement.focus();
      }
    }
  }

  focusLocationNumberField(event) {
    if (event.keyCode === 13) {
      event.preventDefault();

      this.locationNumberView.nativeElement.focus();
    }
  }

  focusStreetField(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.streetView.nativeElement.focus();
    }
  }

  focusVillageField(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.villageView.nativeElement.focus();
    }
  }

  focusCommuneField(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.communeView.nativeElement.focus();
    }
  }

  focusKhanField(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.khanView.nativeElement.focus();
    }
  }

  focusCityField(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      // this.cityView.nativeElement.focus();

    }
  }

  focusPrimaryPhoneField(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.primaryPhoneView.nativeElement.focus();
    }
  }

  focusSecondaryPhoneField(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.secondaryPhoneView.nativeElement.focus();
    }
  }

  focusThirdPhoneField(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.thirdPhoneView.nativeElement.focus();
    }
  }

  focusCommentField(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.commentView.nativeElement.focus();
    }
  }

  get loan() {
    return this.newLeadForm.get('requestedServices.loan');
  }

  get saving() {
    return this.newLeadForm.get('requestedServices.saving');
  }

  get firstName() {
    return this.newLeadForm.get('firstName');
  }

  get lastName() {
    return this.newLeadForm.get('lastName');
  }

  get email() {
    return this.newLeadForm.get('email');
  }

  get locationNumber() {
    return this.newLeadForm.get('address.locationNumber');
  }

  get street() {
    return this.newLeadForm.get('address.street');
  }

  get village() {
    return this.newLeadForm.get('address.village');
  }

  get commune() {
    return this.newLeadForm.get('address.commune');
  }

  get khan() {
    return this.newLeadForm.get('address.khan');
  }

  get country() {
    return this.newLeadForm.get('address.country');
  }

  get city() {
    return this.newLeadForm.get('address.city');
  }

  get address() {
    return this.newLeadForm.get('address');
  }

  get phones() {
    return this.newLeadForm.get('phones');
  }

  get primaryPhone() {
    return this.newLeadForm.get('phones.primaryPhone');
  }

  get secondaryPhone() {
    return this.newLeadForm.get('phones.secondaryPhone');
  }

  get thirdPhone() {
    return this.newLeadForm.get('phones.thirdPhone');
  }

  get requestedServices() {
    return this.newLeadForm.get('requestedServices');
  }

  get requestedServiceDate() {
    return this.newLeadForm.get('requestedServiceDate');
  }


}
