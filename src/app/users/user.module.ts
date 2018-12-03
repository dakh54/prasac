import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material';

import { BranchService } from '../branches/branch.service';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    UserRoutingModule,
    SharedModule,
    MatSelectModule
  ],
  providers: [
    BranchService,
    UserService
  ]
})
export class UserModule { }
