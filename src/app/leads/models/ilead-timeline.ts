import { IAddress } from 'src/app/shared/models/iaddress';

import { ILead } from './ilead';

export interface ILeadTimeLine {
    leadId: string;
    createdAt: Date;
    createdBy: string;
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
