import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { FilterByKeywordsPipe } from 'src/app/features/services/filterByKeywords.pipe';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { DetailedInformationComponent } from './detailed-information.component';

describe('DetailedInformationComponent', () => {
  let component: DetailedInformationComponent;
  let fixture: ComponentFixture<DetailedInformationComponent>;
  const initialState = { loggedIn: false };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DetailedInformationComponent, RouterTestingModule],
      providers: [FilterByKeywordsPipe, HttpClient, HttpHandler, provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(DetailedInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
