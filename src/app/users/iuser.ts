import { IWork } from '../shared/models/iwork';

export interface IUser {
    uid: number;
    nationalId?: number;
    displayName: string;
    position?: string;
    email: string;
    photoURL?: string;
    homeOffice?: string;
    phoneNumber?: string;
    emailVerified?: boolean;
    roles?: string [];
    myWorks?: IWork;
}
