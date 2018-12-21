import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase/app';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { AuthService } from './../../core/auth.service';
import { Upload } from './../models/upload';



@Injectable({
  providedIn: 'root'
})
export class FileService {


  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private storage: AngularFireStorage
  ) {}

  uploadSingleFile(filePath: string, uploadFile: Upload) {


  }

  uploadProfilePicture(filePath: string, uploadFile: Upload) {
    const file = uploadFile.file;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    uploadFile.progress = task.percentageChanges();

    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(
          _url => {
            uploadFile.url = _url;
            this.authService.updatePictureUrl(_url)
              .catch((error) => {
                console.log('error', error);
                this.toastr.error('Failed to update photo url');
              });
          },
          err => {
            console.log('err get download url', err);
            this.toastr.error('Failed to update photo url');
          }
        );
      })
    ).subscribe();

    // const storageRef = firebase.storage().ref();
    // let uploadTask = storageRef
    //   .child(`${this.profilePictureFolder}/${uploadFile.file.name}`)
    //   .put(uploadFile.file);

    // uploadTask.on(
    //   firebase.storage.TaskEvent.STATE_CHANGED,
    //   (snapshot: firebase.storage.UploadTaskSnapshot) => {
    //     uploadFile.progress =
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     console.log('uploadFile.progress', uploadFile.progress);
    //   },
    //   (error) => {
    //     console.log('error', error);
    //     this.toastr.error('Upload failed');
    //   },
    //   () => {
    //     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    //       console.log('File available at', downloadURL);
    //       uploadFile.url = downloadURL;

    //       this.authService.updatePictureUrl(downloadURL)
    //       // .then(d => {
    //       //   console.log('d.data()', d.data());

    //       // })
    //       .catch((error) => {
    //         console.log('error', error);
    //         this.toastr.error('Failed to update photo url');
    //       });
    //     });
    //   }
    // );


  }
}
