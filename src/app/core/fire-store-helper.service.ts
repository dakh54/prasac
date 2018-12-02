import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FireStoreHelperService {

  constructor() { }

  GetServerTimeStamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }
}
