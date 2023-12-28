import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  SearchItem, Snippet, Statistics, VideoResponse,
} from 'src/app/shared/models/search-item.model';
import {
  BehaviorSubject, Subject, map, switchMap, tap,
} from 'rxjs';
import { SearchResponse } from 'src/app/shared/models/search-response.model';
import { Store } from '@ngrx/store';
import { selectSearchItems } from 'src/app/redux/selectors/search-items.selector';
import { SearchItemsActions } from 'src/app/redux/actions/search-items.actions';
import { FilterByKeywordsPipe } from './filterByKeywords.pipe';

@Injectable({
  providedIn: 'root',
})
export class SearchItemsService {
  searchItems$ = this.store.select(selectSearchItems);

  private arrSubject = new Subject<SearchItem[] | SearchItem>();

  private keywordsSubject = new Subject();

  item: SearchItem | undefined = undefined;

  items: SearchItem[] | null = null;

  currentItems: SearchItem[] | null = null;

  keywords = new BehaviorSubject('');

  onKeywordsChange$ = this.keywords.asObservable();

  constructor(
    private filterByPipe: FilterByKeywordsPipe,
    private http: HttpClient,
    private store: Store,
  ) {}

  public getArrSubject(): Subject<SearchItem[] | SearchItem> {
    return this.arrSubject;
  }

  public getKeywordsSubject() {
    return this.keywordsSubject;
  }

  getItems() {
    // const response = db;
    // this.items = response.items;
    // this.currentItems = response.items;
    // this.arrSubject.next(response.items);
    // const request = this.http.get<SearchResponse>(this.baseVideoUrl);
    const request = this.http.get<VideoResponse>('/videos');
    request.subscribe((res) => {
      const { items } = res;
      this.arrSubject.next(items);
    });
  }

  getItem(id: string) {
    // const response = db;
    // this.items = response.items;
    // this.item = response.items.find((item) => item.id === id);
    // this.arrSubject.next(this.item as SearchItem);
    const videoParams = new HttpParams()
      .set('id', id)
      .set('type', 'video')
      .set('part', 'snippet,statistics');
    return this.http.get<VideoResponse>('/videos', { params: videoParams }).pipe(
      tap((data) => {
        // this.arrSubject.next(data.items);
        // this.item = data.items.find((item) => item.id === id);
        [this.item] = data.items;
      }),
    );
  }

  getByInput(input: string) {
    // const request = this.http.get<SearchResponse>(`${this.baseSearchUrl}${input}`);
    // console.log('request', request);
    // request.pipe(
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   tap((res) => {
    //     const { items } = res;
    //     console.log('res', res);
    //     this.arrSubject.next(items);
    //     this.items = items;
    //   }),
    // );
    // return request;

    // return this.http.get<SearchResponse>(`${this.baseSearchUrl}${input}`)
    //   .pipe(
    //     tap((res) => {
    //       console.log('res', res);
    //       this.arrSubject.next(res.items);
    //       this.items = res.items;
    //     }),
    //   );|

    // this.http.get<SearchResponse>(`${this.baseSearchUrl}${input}`).subscribe((res) => {
    //   (this.arrSubject.next(res.items));
    // });
    const searchParams = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', '15')
      .set('q', input);

    return this.http.get<SearchResponse>('/search', { params: searchParams })
      .pipe(
        map((searchRes: SearchResponse) => searchRes.items.map((item) => item.id.videoId)),

        switchMap((ids) => {
          const videoParams = new HttpParams()
            .set('id', ids.join(','))
            .set('type', 'video')
            .set('part', 'snippet,statistics');
          return this.http.get<VideoResponse>('/videos', { params: videoParams });
        }),
        tap((data) => {
          const searchItems = data.items;
          this.arrSubject.next(data.items);
          this.store.dispatch(SearchItemsActions.getSearchItems({ searchItems }));
        }),
      );
    // .subscribe((res) => {
    //   this.arrSubject.next(res.items);
    // });
  }

  sortBy(field: keyof Snippet | keyof Statistics, order: 'asc' | 'desc' = 'asc'): SearchItem[] | undefined {
    if (this.currentItems) {
      return this.currentItems.sort((a, b) => {
        if (a.snippet[field as keyof Snippet]) {
          if (order === 'asc') {
            return String(a.snippet[field as keyof Snippet]).localeCompare(String(b.snippet[field as keyof Snippet]));
          } if (order === 'desc') {
            return String(b.snippet[field as keyof Snippet]).localeCompare(String(a.snippet[field as keyof Snippet]));
          }
          return 0;
        }
        if (a.statistics[field as keyof Statistics]) {
          if (order === 'asc') {
            return String(a.statistics[field as keyof Statistics])
              .localeCompare(String(b.statistics[field as keyof Statistics]));
          } if (order === 'desc') {
            return String(b.statistics[field as keyof Statistics])
              .localeCompare(String(a.statistics[field as keyof Statistics]));
          }
          return 0;
        }
        return 0;
      });
    }
    return undefined;
  }

  setKeywords(keywords: string) {
    this.keywords.next(keywords);
  }

  filterBy() {
    if (this.items) {
      const filteredItems = this.filterByPipe.transform(this.items, this.keywords.value);
      this.currentItems = filteredItems;
      this.arrSubject.next(filteredItems);
    }
    return undefined;
  }
}
