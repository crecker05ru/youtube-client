import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { FilterByKeywordsPipe } from 'src/app/features/services/filterByKeywords.pipe';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  const initialState = { loggedIn: false };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FilterComponent],
      providers: [FilterByKeywordsPipe, HttpClient, HttpHandler, provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
