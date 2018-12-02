import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment.prod';

import { IBranch } from './ibranch';
import { IBranchCreate } from './ibranch-create';


@Injectable()
export class BranchService {

//   provinces: IBranch [] = [
//     {
//       branch: 'Banteay Meanchey',
//       code: 'BM'
//     },
//     {
//       branch: 'Battambang',
//       code: 'BB'
//     },
//     {
//       branch:'Kampong Cham',
//       code: 'KC'
//     },
//     {
//       branch:'Kampong Chhnang',
//       code: 'KH'
//     },
//     {
//       branch:'Kampong Speu',
//       code: 'KS'
//     },
//     {
//       branch:'Kampong Thom',
//       code: 'KT'
//     },
//     {
//       branch:'Kampot',
//       code: 'KP'
//     },
//     {
//       branch:'Kandal',
//       code: 'KD'
//     },
//     {
//       branch:'Kep',
//       code: 'KE'
//     },
//     {
//       branch:'Koh Kong',
//       code: 'KK'
//     },
//     {
//       branch:'Kratie',
//       code: 'KR'
//     },
//     {
//       branch:'Mondulkiri',
//       code: 'MK'
//     },
//     {
//       branch:'Oddar Meanchey',
//       code: 'OM'
//     },
//     {
//       branch:'Pailin',
//       code: 'PL'
//     },
//     {
//       branch:'Phnom Penh',
//       code: 'PP'
//     },
//     {
//       branch:'Preah Sihanouk',
//       code: 'PS'
//     },
//     {
//       branch:'Preah Vihear',
//       code: 'PH'
//     },
//     {
//       branch:'Prey Veng',
//       code: 'PV'
//     },
//     {
//       branch:'Pursat',
//       code: 'PS'
//     },
//     {
//       branch:'Ratanakiri',
//       code: 'RK'
//     },
//     {
//       branch:'Siem Reap',
//       code: 'SR'
//     },
//     {
//       branch:'Stung Treng',
//       code: 'ST'
//     },
//     {
//       branch:'Svay Rieng',
//       code: 'SI'
//     },
//     {
//       branch:'Takeo',
//       code: 'TK'
//     },
//     {
//       branch:'Tbong Khmum',
//       code: 'TH'
//     }
// ];

  branchCollections: AngularFirestoreCollection<IBranch>;
  branchColName = environment.brachCollection;

  constructor(
    private afs: AngularFirestore
  ) {
    this.branchCollections = this.afs.collection<IBranch>('branches');
   }

  Add(branch: IBranchCreate) {
    return this.branchCollections.add(branch);
  }

  GetBranches(){
    return this.branchCollections.valueChanges();
  }

  GetBranchDocRef(branchCode: string) {
    return firebase.firestore().collection(this.branchColName)
        .doc(branchCode);
  }



  // private PopulateBranches() {
  //   const db = firebase.firestore();
  //   const batch = db.batch();
  //   this.provinces.forEach(element => {
  //     console.log('element', element);

  //     const docId = element.code;
  //     const docRef = db.collection('branches').doc(docId);

  //     batch.set(docRef,
  //     {
  //       branch: element.branch,
  //       code: element.code
  //     });
  //   });

  //   return batch.commit();
  // }
}
