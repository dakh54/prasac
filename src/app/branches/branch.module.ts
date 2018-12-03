import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BranchRoutingModule } from './branch-routing.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    BranchRoutingModule
  ]
})
export class BranchModule { }
