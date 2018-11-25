import { IWork } from '../shared/models/iwork';

export interface IBranch {
    name: string;
    phone?: string;
    address?: string;
    employees?: number;
    myWork?: IWork;
}
