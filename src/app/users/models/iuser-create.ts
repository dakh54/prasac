export interface IUserCreate {
    nationalId?: number;
    firstName: string;
    lastName: string;
    displayName: string;
    position?: string;
    email: string;
    photoURL?: string;
    homeOffice?: string;
    phoneNumber?: string [];
}
