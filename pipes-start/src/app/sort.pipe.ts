import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propToSortBy: string): any {
    const sortedItems = [];

    if (!propToSortBy) {
      return value;
    }

    for (let item of value) {
      if (item[propToSortBy]){
        //add the item at the correct location
        let i = 0;
        while ( i < sortedItems.length && item[propToSortBy] > sortedItems[i][propToSortBy] ) {
          i++;
        }
        sortedItems.splice(i,0,item);
      }
    }
    // return sortedItems;
    return value.sort(function(a, b) {
      if (a[propToSortBy] >= b[propToSortBy]) {
        return 1;
      }
      else return -1;
    });
  }

}
