import { IAddress } from '../shared/models/iaddress';

export interface IBranch {
    branch: string;
    code: string;
    address?: IAddress;
}
