import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

import { AuthService } from '../auth.service';
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
    const dialogRef = this.dialog.open( ChangePasswordComponent, {
      width: '300px',
      height: 'auto',
      autoFocus: true
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
