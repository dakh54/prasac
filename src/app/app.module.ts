import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ErrorStateMatcher, MatIconRegistry, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { LeadModule } from './leads/lead.module';
import { SigninComponent } from './security/signin/signin.component';
import {
  FileUploadSingleDialogComponent
} from './shared/dialog/file-upload-single-dialog/file-upload-single-dialog.component';
import { InfoComponent } from './shared/dialog/info/info.component';
import { HttpInterceptorService } from './shared/services/http-interceptor.service';
import { SharedModule } from './shared/shared.module';
import { ChangePasswordComponent } from './users/change-password/change-password.component';




const firebaseConfig = {
  apiKey: 'AIzaSyAIAaIBJZJnpqef7GDgku9sVyjYZ0yS5rQ',
  authDomain: 'prasac-a8e2a.firebaseapp.com',
  databaseURL: 'https://prasac-a8e2a.firebaseio.com',
  projectId: 'prasac-a8e2a',
  storageBucket: 'prasac-a8e2a.appspot.com',
  messagingSenderId: '604961477170'
};


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    ToastrModule.forRoot(),
    SharedModule,
    CoreModule,
    LeadModule

  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  entryComponents: [
    InfoComponent,
    ChangePasswordComponent,
    FileUploadSingleDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
