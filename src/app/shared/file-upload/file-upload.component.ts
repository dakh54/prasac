import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
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

  // upload(files) {
  //   if (files.length === 0) {
  //     return;
  //   }

  //   const formData = new FormData();

  //   for (const file of files) {
  //     formData.append(file.name, file);
  //   }
  //   const license: ILicense = {
  //     siteId: 2,
  //     priority: 2,
  //     saleOrder: '1234',
  //     mACaddress: 'mac1234',
  //     licenseType: 'virtual',
  //     reqDeliveryDate: new Date('10-28-2018'),
  //     sAPlineItem: '10',
  //     status: 1,
  //     customerEmail: 'customer@email.com',
  //     instructions: 'no special instruction',
  //     createdAt: new Date(),
  //     createdBy: 1
  //   };

  //   Object.keys(license).forEach(k => {
  //     console.log(k, license[k]);
  //     formData.append(k, license[k]);
  //   });

  //   console.log('formData', formData);
  //   const uploadReq = new HttpRequest('POST', `${this.apiEndPoint}license/new`, formData, {
  //     reportProgress: true
  //   });

  //   this.http.request(uploadReq).subscribe(event => {
  //     if (event.type === HttpEventType.UploadProgress) {
  //       this.progress = Math.round(100 * event.loaded / event.total);
  //     } else if (event.type === HttpEventType.Response) {
  //       this.message = event.body.toString();
  //     }
  //   });
  // }

}

