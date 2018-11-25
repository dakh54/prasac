import { IFile } from '../../shared/file-upload/ifile';
import { IError } from './ierror';

export interface IFileProcess {
    error?: IError;
    files?: IFile [];

}
