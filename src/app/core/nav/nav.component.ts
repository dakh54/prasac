import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

import { AuthService } from '../auth.service';
import {
  FileUploadSingleDialogComponent
} from './../../shared/dialog/file-upload-single-dialog/file-upload-single-dialog.component';
import { ChangePasswordComponent } from './../../users/change-password/change-password.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() selected = '';
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  title = environment.appName;

  @ViewChild('drawer') sidenav: any;




  constructor(
    private breakpointObserver: BreakpointObserver,
    public authService: AuthService,
    public dialog: MatDialog
  ) {}

  openChangePassword() {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      width: '300px',
      height: 'auto',
      autoFocus: true
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  openUploadPicture() {
    const dialogRef = this.dialog.open(FileUploadSingleDialogComponent, {
      width: 'auto',
      height: 'auto',
      autoFocus: true,
      data: {
        title: 'Upload Profile Picture'
      }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }


  toggleSidenav() {
    this.sidenav.toggle();
  }

  signOut() {
    this.authService.signout();
  }
}
