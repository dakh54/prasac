import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatBadgeModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { HasRoleDirective } from '../core/has-role.directive';
import { NavComponent } from '../core/nav/nav.component';
import { ColorSetterDirective } from './class-style/color-setter.directive';
import { PrimaryClassDirective } from './class-style/primary-class.directive';
import { WhiteClassDirective } from './class-style/white-class.directive';
import { ForbiddenComponent } from './error/forbidden/forbidden.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { TimeoutComponent } from './error/timeout/timeout.component';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';


@NgModule({
  declarations: [
    NavComponent,
    ForbiddenComponent,
    TimeoutComponent,
    PageNotFoundComponent,
    UnauthorizedComponent,
    HasRoleDirective,
    ColorSetterDirective,
    PrimaryClassDirective,
    WhiteClassDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [

  ],
  exports: [
    NavComponent,
    ReactiveFormsModule,
    ForbiddenComponent,
    TimeoutComponent,
    PageNotFoundComponent,
    UnauthorizedComponent,
    HasRoleDirective,
    ColorSetterDirective,
    PrimaryClassDirective,
    WhiteClassDirective,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SharedModule { }
