import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatBadgeModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { NavComponent } from '../core/nav/nav.component';
import { ColorSetterDirective } from '../shared/class-style/color-setter.directive';
import { PrimaryClassDirective } from '../shared/class-style/primary-class.directive';
import { HasRoleDirective } from './has-role.directive';




@NgModule({
  declarations: [
    NavComponent,
    ColorSetterDirective,
    PrimaryClassDirective,
    HasRoleDirective
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatBadgeModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    ColorSetterDirective,
    HasRoleDirective,
    PrimaryClassDirective,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatBadgeModule
  ]
})
export class CoreModule { }
