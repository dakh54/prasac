import { IAddress } from 'src/app/shared/models/iaddress';

export interface ILead {
    uid: string;
    firstName: string;
    lastName: string;
    requestedService: string [];
    requestedServiceDate?: Date;
    branch: string;
    status: string;
    address?: IAddress;
    phones?: string [];
    email?: string;
    comment?: string;
    officer?: string;

}
