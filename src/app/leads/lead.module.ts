import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadRoutingModule } from './lead-routing.module';
import { LeadNewComponent } from './lead-new/lead-new.component';

@NgModule({
  declarations: [LeadNewComponent],
  imports: [
    CommonModule,
    LeadRoutingModule
  ]
})
export class LeadModule { }
