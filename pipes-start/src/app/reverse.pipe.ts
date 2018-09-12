import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, propToReverse: string): any {
    // don't process anything if there is no property to reverse
    if (!propToReverse) {
      return value;
    }
    for (let item of value) {
      if (item[propToReverse])
      {
        const splitValue = (<string>item[propToReverse]).split('');
        const reverseValue = splitValue.reverse();
        item[propToReverse] = reverseValue.join('');
      }
    }
    return value;
  }

}
