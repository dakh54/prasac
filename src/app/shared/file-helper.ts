import { IFile } from '../shared/file-upload/ifile';



  // get unallow file extension
  // allowExtensions = ['pdf', 'bmp']
export function  getUnallowFiles(files: File[], allowFileExtensions: string[]): File[] {
    return files.filter(
      f =>
        !allowFileExtensions.includes(
          f.name
            .split('.')
            .pop()
            .toLowerCase()
        )
    );
  }

  // remove unallow file extension
  export function  getAllowFiles(files: File[], allowFileExtensions: string[]): File[] {
    return files.filter(f =>
      allowFileExtensions.includes(
        f.name
          .split('.')
          .pop()
          .toLowerCase()
      )
    );
  }

  // get fileName in Array to join it later
  export function getFileNames(files: File[]): string[] {
    return files.map(f => f.name);
  }

  // get file extension
  export function  getFileExtenstion(fileName: string): string {
    return fileName.split('.').pop().trim();
  }


  // get unresizable files
  export function  getUnresizableFiles(files: File[]): File[] {
    return files.filter(f => f.type !== 'image/jpeg' && f.type !== 'image/png');
  }

  // check size of unresizable files
  export function  getOverMaxSizeFiles(files: File[], maxSizeInByte: number): File[] {
    return files.filter(f => f.size > maxSizeInByte);
  }

  // get resizable files
  export function  filteredOutOverSizeFiles(files: File[], overSizeFiles: File[]): File[] {
    const oversizedFileNames = getFileNames(overSizeFiles);

    const returnResult: File[] = [];
    files.map(f => {
      if (oversizedFileNames.indexOf(f.name) === -1) {
        returnResult.push(f);
      }
    });

    return returnResult;
  }


  // export function  compressEachImage(file: File, maxSizeInByte: number) {
  //   const resizePercentage = this.getResizePercentageOfMegabytes(maxSizeInByte);
  //   return this.ng2ImgMax.compressImage(file, resizePercentage);
  // }

  export function  getResizePercentageOfMegabytes(maxFileSizeInByte: number): number {
    return maxFileSizeInByte / (1024 * 1024);
  }

  export function  canResize(fileObject: File, maxSizeInByte: number) {
    if (
      fileObject.size > maxSizeInByte &&
      (fileObject.type === 'image/png' || fileObject.type === 'img/jpeg')
    ) {
      return true;
    }
    return false;
  }

  export function  getObjectArrayOfImageFiles(files: File[]): IFile[] {
    const returnIFiles: IFile[] = [];
    files.forEach(f => {
      const newIfile: IFile = {
        file: f,
        extension: f.name.split('.').pop(),
        fileUrl: URL.createObjectURL(f)
      };
      returnIFiles.push(newIfile);
    });

    return returnIFiles;
  }

  // open blobData
  export function  openUrl(blobData: Blob) {
    window.open(URL.createObjectURL(blobData));
  }

  export function  createBlob(arrayBuffer: ArrayBuffer[], fileName: string) {
    const fileExtension = getFileExtenstion(fileName);
    const contentType = getContentType(fileExtension);
    return new Blob(arrayBuffer, {type: contentType});
  }

  export function  getContentType(fileExtension: string): string {
    switch (fileExtension) {
      case 'txt':
        return 'text/plain';

      case 'css':
            return 'text/css';

      case 'html':
        return 'text/html';

      case 'gif':
        return 'image/gif';

      case 'png':
        return 'image/png';

      case 'jpeg' || 'jpg' || 'bmp':
        return 'image/jpeg';

      case 'jpg':
        return 'image/jpeg';

      case 'bmp':
        return 'image/jpeg';

      case 'ico':
        return 'image/x-icon';

      case 'pdf':
        return 'application/pdf';

      case 'midi':
        return 'audio/midi';

      case 'mpeg':
        return 'audio/mpeg';

      case 'wav':
          return 'audio/wav';

      case 'webm':
        return 'video/webm';

      case 'ogg':
        return 'video/ogg';

      case 'mp4':
          return 'video/mp4';

      default:
        return 'application/octet-stream';
    }
  }
