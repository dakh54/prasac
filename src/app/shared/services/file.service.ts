import 'firebase/storage';

import { Injectable } from '@angular/core';
import { checkNoChanges } from '@angular/core/src/render3/instructions';
import * as firebase from 'firebase/app';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment.prod';

import { AuthService } from './../../core/auth.service';
import { Upload } from './../models/upload';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  profilePictureFolder = environment.profilePictureFolder;

  constructor(
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  uploadSingleFile(basePaht: string) {}

  uploadProfilePicture(uploadFile: Upload) {
    const storageRef = firebase.storage().ref();
    let uploadTask = storageRef
      .child(`${this.profilePictureFolder}/${uploadFile.file.name}`)
      .put(uploadFile.file);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: firebase.storage.UploadTaskSnapshot) => {
        uploadFile.progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('uploadFile.progress', uploadFile.progress);
      },
      (error) => {
        console.log('error', error);
        this.toastr.error('Upload failed');
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('File available at', downloadURL);
          uploadFile.url = downloadURL;

          this.authService.updatePictureUrl(downloadURL)
          // .then(d => {
          //   console.log('d.data()', d.data());

          // })
          .catch((error) => {
            console.log('error', error);
            this.toastr.error('Failed to update photo url');
          });
        });
      }
    );
  }
}
