import { NgIf } from '@angular/common';
import {
  Component,
} from '@angular/core';
import { Subject } from 'rxjs';
import { FilterService } from 'src/app/features/services/filter.service';
import { SearchItemsService } from 'src/app/features/services/search-items.service';

@Component({
  standalone: true,
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  imports: [NgIf],
})
export class FilterComponent {
  protected unsubscribe$: Subject<void> = new Subject();

  isShowFilter?: boolean;

  orderBy: 'asc' | 'desc' = 'asc';

  keywords = '';

  constructor(
    private filterService: FilterService,
    public searchItemsService: SearchItemsService,
  ) {
    filterService.isFilterShow$.subscribe((newVal: boolean) => {
      this.isShowFilter = newVal;
    });
  }

  toggle() {
    this.isShowFilter = !this.isShowFilter;
  }

  sortBy(field: 'viewCount' | 'publishedAt') {
    this.orderBy = this.orderBy === 'asc' ? 'desc' : 'asc';
    this.searchItemsService.sortBy(field, this.orderBy);
  }

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.keywords = target.value;
      this.searchItemsService.setKeywords(this.keywords);
    }
  }

  filterByKeywords() {
    this.searchItemsService.filterBy();
  }
}
