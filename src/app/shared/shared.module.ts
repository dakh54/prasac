import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { ForbiddenComponent } from './error/forbidden/forbidden.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { TimeoutComponent } from './error/timeout/timeout.component';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';


@NgModule({
  declarations: [
    ForbiddenComponent,
    TimeoutComponent,
    PageNotFoundComponent,
    UnauthorizedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  providers: [

  ],
  exports: [
    ForbiddenComponent,
    TimeoutComponent,
    PageNotFoundComponent,
    UnauthorizedComponent
  ]
})
export class SharedModule { }
