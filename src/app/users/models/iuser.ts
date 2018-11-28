export interface IUser {
    uid: number;
    nationalId?: number;
    firstName?: string;
    lastName?: string;
    displayName: string;
    position?: string;
    email: string;
    photoURL?: string;
    homeOffice?: string;
    phoneNumber?: string;
    emailVerified?: boolean;
    roles?: string [];
}
