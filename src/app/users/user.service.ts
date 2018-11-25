import { Injectable } from '@angular/core';

import { IUser } from './iuser';


@Injectable()
export class UserService {

  positions = [
    'Customer Service',
    'Credit Officer',
    'District Manager',
    'Branch Manager',
    'Risk Officer',
    'COO',
    'CEO',
    'Human Resources',
    'Adminstrator'
  ];

  constructor() { }

  createNewUser(user: IUser) {

  }
}
