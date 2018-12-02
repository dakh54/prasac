import { IStateLead } from 'src/app/stats/istat-lead';
import { IStatLoan } from 'src/app/stats/istat-loan';

export interface IStatUser {
    id: string;
    displayName: string;
    roles?: string [];
    leads?: IStateLead;
    loans?: IStatLoan
}
