import { IBranch } from 'src/app/branches/ibranch';
import { IAddress } from 'src/app/shared/models/iaddress';
import { IUser } from 'src/app/users/models/iuser';

export interface ILeadCreate {
    firstName: string;
    lastName: string;
    requestedServices?: string [];
    requestedServiceDate?: Date;
    status: string;
    address?: IAddress;
    phones?: string [];
    email?: string;
    comment?: string;
    createdBy: IUser;
    createdAt?: any;
    branchCode: string;
}
