import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utcToLocalDateTime'
})
export class UtcToLocalDateTimePipe implements PipeTransform {

  transform(value: Date): any {
    return new Date(value.toString() + 'z');
  }

}
