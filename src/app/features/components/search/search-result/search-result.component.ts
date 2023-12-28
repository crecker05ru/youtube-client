import {
  Component, OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByKeywordsPipe } from 'src/app/features/services/filterByKeywords.pipe';
import { SearchItem } from 'src/app/shared/models/search-item.model';
import {
  Observable, Subject,
} from 'rxjs';
import { selectSearchItems } from 'src/app/redux/selectors/search-items.selector';
import { Store } from '@ngrx/store';
import { FavoritesActions } from 'src/app/redux/actions/favorites.actions';
import { selectFavorites } from 'src/app/redux/selectors/favorites.selector';
import { HttpClient } from '@angular/common/http';
import { SearchItemsService } from '../../../services/search-items.service';
import { SearchItemComponent } from '../search-item/search-item.component';

@Component({
  standalone: true,
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  imports: [SearchItemComponent, CommonModule],
  providers: [FilterByKeywordsPipe, HttpClient],
})
export class SearchResultComponent implements OnInit {
  public searchItems$ = this.store.select(selectSearchItems);

  public favorites$ = this.store.select(selectFavorites);

  private content$: Subject<SearchItem | SearchItem[]> | undefined;

  public favoritesMap = {};

  public itemsPerPage = 20;

  // items = this.searchItemsService.getItems();
  items: SearchItem[] = [];

  items$!: Observable<SearchItem[]>;

  private searchInput = new Subject<string>();

  keywords = '';

  // items: Observable<[]>;

  // private arrSubject: Subject<[]>;

  constructor(
    private searchItemsService: SearchItemsService,
    private store: Store,
  ) {
    // this.arrSubject = new Subject<[]>();
    // this.items = this.arrSubject.asObservable();
  }

  ngOnInit(): void {
    this.content$ = this.searchItemsService.getArrSubject();
    this.content$?.subscribe((data: SearchItem[] | SearchItem) => {
      this.items = data as SearchItem[];
    });
    this.searchItemsService.onKeywordsChange$.subscribe((words) => { this.keywords = words; });
    // this.items$ = this.searchInput.pipe(
    //   debounceTime(300),

    //   distinctUntilChanged(),

    //   switchMap((searchInp: string) => this.searchItemsService.getByInput(searchInp)),
    // );
  }

  // onAdd(item: SearchItem) {
  //   this.store.dispatch(FavoritesActions.addFavorite({ favorite: item }));
  // }
  onFavoriteButtonClick(item: SearchItem) {
    this.store.dispatch(FavoritesActions.addFavorite({ favorite: item }));
  }
}
