import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinArray'
})
export class JoinArrayPipe implements PipeTransform {

  transform(value: string[]): string {

    if (value.length === undefined) {
      return '';
    }

    if (value.length > 1) {
      return value.join(', ');
    }

    if (value.length === 1) {
      return value[0];
    }

    return '';
  }

}
