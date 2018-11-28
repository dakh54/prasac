import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {

  @Input() selected = '';
  isHandset$: Observable<boolean>
    = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  title = 'Loan Origination';

  @ViewChild('drawer') sidenav: any;
  constructor(
    private breakpointObserver: BreakpointObserver,
    public authService: AuthService) {}

    toggleSidenav() {
      this.sidenav.toggle();
    }

  signOut() {
    this.authService.signout();
  }


}
