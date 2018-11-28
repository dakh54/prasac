import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchService } from 'src/app/branches/branch.service';
import { MyErrorStateMatcher } from 'src/app/shared/MyErrorStateMatcher';
import { CustomFormBuilder } from 'src/app/users/custom-form-builder';

@Component({
  selector: 'app-lead-new',
  templateUrl: './lead-new.component.html',
  styleUrls: ['./lead-new.component.scss']
})
export class LeadNewComponent implements OnInit {

  newLeadForm: FormGroup;
  matcher = new MyErrorStateMatcher();


  constructor(
    private fb: FormBuilder,
    public branchService: BranchService
  ) { }

  ngOnInit() {
    this.createLeadForm();
  }


  createLeadForm() {
    this.newLeadForm = this.fb.group({
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      loan: "",
      saving:"",
      address: CustomFormBuilder.createAddressForm(this.fb),
      phones: CustomFormBuilder.createPhonesForm(this.fb),
      comment: ""
    });
  }


  get loan() {
    return this.newLeadForm.get('loan');
  }

  get saving() {
    return this.newLeadForm.get('saving');
  }

  get firstname() {
    return this.newLeadForm.get('firstname');
  }

  get lastname() {
    return this.newLeadForm.get('lastname');
  }

  get city() {
    return this.newLeadForm.get('address.city');
  }

  get address() {
    return this.newLeadForm.get('ddress');
  }

  get phones() {
    return this.newLeadForm.get('phones');
  }

  save() {
    console.log('this.newLeadForm', this.newLeadForm.value);

  }
}
