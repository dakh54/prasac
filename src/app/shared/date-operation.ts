import * as moment from 'moment';

// return 09/30/2018 23:59:59
export function SetMidnightHours(localDate: Date) {
    localDate.setHours(23, 59, 59, 0);
    return localDate;
}

export function LocalDateToUTC(localDate: Date) {
    return new Date(localDate.toUTCString());
}

export function GetDateDDD(_date: Date) {
    return moment(_date).dayOfYear()
}
