import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../core/auth.guard';
import { LeadNewComponent } from './lead-new/lead-new.component';

const routes: Routes = [
  {
    path: 'new',
    component: LeadNewComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'CanAccessLead'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadRoutingModule { }
