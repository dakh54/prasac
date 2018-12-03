import { AbstractControl, ValidatorFn } from '@angular/forms';

import { SetMidnightHours } from './date-operation';
import { FindStringInString } from './string-helper';

export function MinDateValidator(minDate: Date): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
        if (c.pristine) {
            return null;
        }
        if (minDate > SetMidnightHours(new Date(c.value))) {
            return { 'mindate': true };
        }
        return null;
    };
}


// is not completed validation yet,
// need to revisit
export function MultipleEmailsValidator(c: AbstractControl): { [key: string]: boolean } | null {
    if (c.pristine) {
        return null;
    }

    const emailAddressList = c.value.split(';');
    if (!emailAddressList) {
        return {'multipleemailaddresses': true };
    }

    emailAddressList.forEach(email => {
        if (!FindStringInString(email, '@')) {
            return {'multipleemailaddresses': true };
        }

        if (!FindStringInString(email, '.')) {
            return {'multipleemailaddresses': true };
        }

        if (email[0] === '.' || email[email.length - 1] === '.') {
            return {'multipleemailaddresses': true };
        }
    });
    return null;

}
