import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';

import { BranchService } from '../branches/branch.service';
import { SharedModule } from '../shared/shared.module';
import { LeadNewComponent } from './lead-new/lead-new.component';
import { LeadRoutingModule } from './lead-routing.module';
import { LeadService } from './lead.service';


@NgModule({
  declarations: [
    LeadNewComponent
  ],
  imports: [
    CommonModule,
    LeadRoutingModule,
    SharedModule,
    MatCheckboxModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatAutocompleteModule
  ],
  providers: [
    BranchService,
    LeadService
  ]
})
export class LeadModule { }
