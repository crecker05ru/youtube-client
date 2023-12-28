import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/shared/models/search-item.model';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(arr: SearchItem[], field: keyof SearchItem, order: 'asc' | 'desc' = 'asc'): SearchItem[] {
    return arr.sort((a, b) => {
      if (order === 'asc') {
        return String(a[field]).localeCompare(String(b[field]));
      } if (order === 'desc') {
        return String(b[field]).localeCompare(String(a[field]));
      }
      return 0;
    });
  }
}
