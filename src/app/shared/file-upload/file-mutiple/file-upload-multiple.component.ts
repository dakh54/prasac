import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

import { environment } from '../../../../environments/environment';



@Component({
  selector: 'app-file-upload-multiple',
  templateUrl: './file-upload-multiple.component.html',
  styleUrls: ['./file-upload-multiple.component.scss']
})
export class FileUploadComponent {
  @ViewChild('fileUploadControl') fileUploadControl: ElementRef;
  @Output() fileOuput = new EventEmitter();

  public progress: number;
  public message: string;

  // apiEndPoint: string = environment.apiUrl;

  constructor() { }


  emitFiles(files) {

    let fileArray = [];

    // transform files
    if (files.length > 0) {
      fileArray = Array.from(files);
    }
    this.fileOuput.emit(fileArray);
  }

}
