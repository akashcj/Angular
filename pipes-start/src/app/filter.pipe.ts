import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, objectName: string): any {
    // Don't filter if the filter string is empty
    if (!filterString) {
      return value;
    }

    const returnValue: any[] = [];

    for (const item of value) {
      if (item[objectName] === filterString) {
        returnValue.push(item);
      }
    }

    return returnValue;
  }

}
