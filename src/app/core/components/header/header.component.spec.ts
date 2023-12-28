import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { FilterByKeywordsPipe } from 'src/app/features/services/filterByKeywords.pipe';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterService } from 'src/app/features/services/filter.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  // let store: MockStore;
  let filterService: FilterService;
  const initialState = { loggedIn: false };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderComponent, RouterTestingModule],
      providers: [FilterByKeywordsPipe, HttpClient, HttpHandler, FilterService, provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    filterService = TestBed.inject(FilterService);
    fixture.detectChanges();
    // store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create app-filter', () => {
    const el = fixture.nativeElement.querySelector('.header__filter');
    expect(el).toBeTruthy();
  });

  it('should create app-filter', () => {
    expect(filterService.filter).toBe(false);
  });
  it('should create app-filter', () => {
    const button = fixture.nativeElement.querySelector('.header__button-filter');
    button.click();
    expect(filterService.filter).toBe(true);
  });
});
