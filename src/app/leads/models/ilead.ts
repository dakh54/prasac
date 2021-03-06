import { IAddress } from 'src/app/shared/models/iaddress';

export interface ILead {
    id: string;
    firstName: string;
    lastName: string;
    requestedServices?: string [];
    requestedServiceDate?: Date;
    status: string;
    address?: IAddress;
    phones?: string [];
    email?: string;
    comment?: string;
    officer?: string;
    createdAt?: Date;
}
