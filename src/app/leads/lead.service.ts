import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { BranchService } from 'src/app/branches/branch.service';

import { environment } from './../../environments/environment';
import { FireStoreHelperService } from './../core/fire-store-helper.service';
import { IStatBranch } from './../stats/istat-branch';
import { ILead } from './models/ilead';
import { ILeadCreate } from './models/ilead-create';


@Injectable()
export class LeadService {
  leadColName = environment.leadCollections;
  leadColHisName = environment.leadHistoryCollection;
  branchColName = environment.brachCollection;

  private leadCollections: AngularFirestoreCollection<ILead>;

  constructor(
    private afs: AngularFirestore,
    private fireStoreHelper: FireStoreHelperService,
    private branchService: BranchService
  ) {
    this.leadCollections = this.afs.collection<any>(this.leadColName);
  }

  async Add(leadCreate: ILeadCreate) {


    try {
      const db = firebase.firestore();
      const branchDocRef = this.branchService.GetBranchDocRef(leadCreate.branchCode);
      const companyLeadDocRef = db.collection(environment.companyCollection)
                            .doc(environment.leadCollections);
      let promises = [
        await branchDocRef.get(),
        await companyLeadDocRef.get()
      ];

      Promise.all(promises).then(
        docArray =>
        {
          const branchDoc = docArray[0];
          const companyLeadDoc = docArray[1];

          const leadRefDoc = db.collection(this.leadColName).doc();
          const histRefDoc = leadRefDoc.collection(this.leadColHisName).doc();


          let isNewBranchDoc = true;
          let currentNewLeads = 1;
          const serverTimeStamp = this.fireStoreHelper.GetServerTimeStamp();

          if (branchDoc.exists) {
            const branchDocData = branchDoc.data();
            isNewBranchDoc = false;
              if (branchDocData
                    && branchDocData.leads
                    && branchDocData.leads.new) {
                currentNewLeads = branchDocData.leads.new + 1;
              }
          }

          let isNewCompanyDoc = true;
          if (companyLeadDoc.exists) {
            isNewCompanyDoc = false;
          }


          const batch = db.batch();

          // 1: create new leads: return docId
          batch.set(leadRefDoc, {
            ...leadCreate,
            createdAt: serverTimeStamp});

          //2: update histories of docid
          batch.set(histRefDoc, {
            action: 'Create new lead',
            createdBy: leadCreate.createdBy,
            createdAt: serverTimeStamp
          });

          //3 update branch: IStatBranch
          if (!isNewBranchDoc) {
            batch.update(branchDocRef, {
              // 'leads.new': currentNewLeads
              leads: {
                new: currentNewLeads
              }
            })
          } else {
            batch.set(branchDocRef, {
              branch: leadCreate.address.city,
              branchCode: leadCreate.branchCode,
              leads: {
                new: currentNewLeads
              }
            })
          }

          // 4: update whole companh stat
          if (!isNewCompanyDoc) {
            batch.update(companyLeadDocRef, {
              new: companyLeadDoc.data().new + 1
            });
          } else {
            batch.set(companyLeadDocRef, {
              new: currentNewLeads
            });
          }

          return batch.commit();
        }
      )

    } catch (error) {
      return Promise.reject(error);
    }
  }


  GetLeads(status: string): Observable<any> {
  //  return this.leadCollections.valueChanges();
  return this.afs.collection(this.leadColName, ref =>
    ref.where('status','==', status)
    .orderBy('createdAt'))
    .valueChanges()
  }
}
