import { IAddress } from '../shared/models/iaddress';


export interface IBranchCreate {
    branch: string;
    code: string;
    address?: IAddress;
    phones?: string [];
}
