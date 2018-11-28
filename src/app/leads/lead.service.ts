import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { ILead } from './models/ilead';

@Injectable()
export class LeadService {
  private leadCollections: AngularFirestoreCollection<ILead>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.leadCollections = this.afs.collection<ILead>('leads');
  }

  add(lead: ILead) {
   let db = this.afs.firestore.batch();
   let leadRef = this.afs.collection(lead.branch)
    .collection('leads');
   leadRef.add(lead)
    .then()
  }
}
