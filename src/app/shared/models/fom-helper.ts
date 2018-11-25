import { AbstractControl } from '@angular/forms';

export function GetCheckBoxValues(formGroup: AbstractControl): string[] {
    const result: string[] = [];
    const formProperties = Object.keys(formGroup);

    formProperties.map(c => {
      if (formGroup[c]) {
        result.push(c);
      }
    });
    return result;
  }
