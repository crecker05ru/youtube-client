import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { FilterByKeywordsPipe } from 'src/app/features/services/filterByKeywords.pipe';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { SearchItemsService } from 'src/app/features/services/search-items.service';
import { SearchResultComponent } from './search-result.component';

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;
  // let store: MockStore;
  let searchItemsService: SearchItemsService;

  const initialState = { loggedIn: false };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchResultComponent],
      providers: [
        FilterByKeywordsPipe, HttpClient, HttpHandler, SearchItemsService, provideMockStore({ initialState }),
      ],
    });
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // store = TestBed.inject(MockStore);
    searchItemsService = TestBed.inject(SearchItemsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('service itemt must be null', () => {
    expect(searchItemsService.items).toBe(null);
  });
});
