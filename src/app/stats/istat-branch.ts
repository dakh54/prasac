import { IStateLead } from './istat-lead';
import { IStatLoan } from './istat-loan';

export interface IStatBranch {
    id: number;
    branch: string;
    branchCode: string;
    leads?: IStateLead;
    loans?: IStatLoan;
}
