import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
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
import { ChangePasswordComponent } from '../users/change-password/change-password.component';
import { BackgroundSetterDirective } from './class-style/background-setter.directive';
import { ColorSetterDirective } from './class-style/color-setter.directive';
import { PrimaryClassDirective } from './class-style/primary-class.directive';
import { WhiteClassDirective } from './class-style/white-class.directive';
import { FileUploadSingleDialogComponent } from './dialog/file-upload-single-dialog/file-upload-single-dialog.component';
import { InfoComponent } from './dialog/info/info.component';
import { ForbiddenComponent } from './error/forbidden/forbidden.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { TimeoutComponent } from './error/timeout/timeout.component';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';
import { FileUploadSingleComponent } from './file-upload/file-single/file-upload-single.component';
import { LoadingComponent } from './loading/loading.component';
import { CircleDirective } from './class-style/circle.directive';


@NgModule({
  declarations: [
    NavComponent,
    ForbiddenComponent,
    TimeoutComponent,
    PageNotFoundComponent,
    UnauthorizedComponent,
    BackgroundSetterDirective,
    HasRoleDirective,
    ColorSetterDirective,
    PrimaryClassDirective,
    WhiteClassDirective,
    InfoComponent,
    ChangePasswordComponent,
    FileUploadSingleComponent,
    FileUploadSingleDialogComponent,
    LoadingComponent,
    CircleDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatCardModule

  ],
  providers: [

  ],
  exports: [
    CommonModule,
    NavComponent,
    FormsModule,
    ReactiveFormsModule,
    ForbiddenComponent,
    TimeoutComponent,
    PageNotFoundComponent,
    UnauthorizedComponent,
    BackgroundSetterDirective,
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
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatCardModule,
    FileUploadSingleComponent,
    FileUploadSingleDialogComponent,
    LoadingComponent,
    CircleDirective

  ],
})
export class SharedModule { }
