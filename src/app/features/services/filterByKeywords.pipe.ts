import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/shared/models/search-item.model';

@Pipe({
  name: 'filterBy',
})
export class FilterByKeywordsPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(arr: SearchItem[], keywords: string): SearchItem[] {
    return arr.filter((item:SearchItem) => item.snippet.title
      .toLocaleLowerCase().includes(keywords.toLocaleLowerCase()));
  }
}
