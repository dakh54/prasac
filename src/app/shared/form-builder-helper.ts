import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

export class FormBuilderHelper {

  static getCheckBoxValues(formGroup: AbstractControl): string[] {
    const result: string[] = [];
    const formProperties = Object.keys(formGroup);

    formProperties.map(c => {
      if (formGroup[c]) {
        result.push(c);
      }
    });
    return result;
  }

  static createAddressForm(fb: FormBuilder) {
    return fb.group({
      locationNumber: '',
      street: '',
      village: '',
      commune: '',
      khan: '',
      city: ['', [Validators.required]],
      country: ''
    });
  }

  static createPhonesForm(fb: FormBuilder) {
    return fb.group({
      primaryPhone: "",
      secondaryPhone: "",
      thirdPhone: ''
    });
  }

  static createServiceRequestedForm(fb: FormBuilder) {
    return fb.group({
      loan: true,
      saving: false
    });
  }



}
