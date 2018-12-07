import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-file-upload-single',
  templateUrl: './file-upload-single.component.html',
  styleUrls: ['./file-upload-single.component.scss']
})
export class FileUploadSingleComponent implements OnInit {

  @ViewChild('fileUploadControl') fileUploadControl: ElementRef;
  @Output() fileOutput = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }


  emitFiles(event) {
    this.fileOutput.emit(event);
  }
}
