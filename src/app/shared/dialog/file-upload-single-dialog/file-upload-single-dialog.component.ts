import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { FileUploadSingleComponent } from './../../file-upload/file-single/file-upload-single.component';
import { Upload } from './../../models/upload';
import { FileService } from './../../services/file.service';


@Component({
  selector: 'app-file-upload-single-dialog',
  templateUrl: './file-upload-single-dialog.component.html',
  styleUrls: ['./file-upload-single-dialog.component.scss']
})
export class FileUploadSingleDialogComponent implements OnInit {
  @ViewChild(FileUploadSingleComponent)
  private fileUploadSingleComponent: FileUploadSingleComponent;


  selectedFile: File;
  currentUpload: Upload;
  imgUrl: any;
  constructor(
    public dialogRef: MatDialogRef<FileUploadSingleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private FileService: FileService
  ) { }

  ngOnInit() {

  }

  uploadFileTrigger() {
    this.fileUploadSingleComponent.fileUploadControl.nativeElement.click();
  }

  handleFileReceived(data) {
   const _files = data.target.files;

    if (_files) {
      this.selectedFile  = _files.item(0);
      var reader = new FileReader();


      reader.onload = (event: any) => {
        this.imgUrl = event.target.result;
      }

      if (this.selectedFile) {
        reader.readAsDataURL(this.selectedFile); // read file as data url
      }
    }

  }

  upload() {
    this.currentUpload = new Upload(this.selectedFile);
    this.FileService.uploadProfilePicture(this.currentUpload);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
