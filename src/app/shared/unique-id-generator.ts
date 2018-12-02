import * as moment from 'moment';

export function GetUniqueLeadId(_branchCode: string) {
    // let _date = new Date();
    // const yy = _date.getUTCFullYear().toString().substring(3,4);


    return _branchCode + ComposeCurrentUniqueTime() + 'L';

}

function ComposeCurrentUniqueTime(): string {
    const _now = moment.utc();
    const dd = _now.format('DD').toString();
    const yy = _now.format('YY').toString();
    const mmm = _now.format("MMM").toString().toUpperCase();
    const hh = _now.format('HH').toString();
    const mm = _now.format('mm').toString();
    const ss = _now.format('ss').toString();
    const ss_frac = _now.format('SS').toString();

    return `${yy}${mmm}${dd}${hh}${mm}${ss}${ss_frac}`;
}
