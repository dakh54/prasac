import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeHHMMSS'
})
export class TimeHHMMSSPipe implements PipeTransform {

  transform(value: any): any {
    return value.substring(0, value.indexOf('.'));
  }

}
