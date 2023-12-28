import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FilterByKeywordsPipe } from './features/services/filterByKeywords.pipe';
import { selectCustomCards } from './redux/selectors/customCards.selector';

describe('AppComponent', () => {
  let store: MockStore;
  const initialState = {
    customCards: [
      {
        creationDate: '2023-11-19',
        description: 'Des',
        id: '1hfmclpr1',
        imageLink: 'Im',
        tags: ['tag'],
        title: 'Tit',
        videoLink: 'Link',
      },
    ],
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HeaderComponent],
      declarations: [AppComponent],
      providers: [FilterByKeywordsPipe, HttpClient, HttpHandler, provideMockStore({ initialState })],
    });
    store = TestBed.inject(MockStore);
  });

  afterEach(() => {
    store.refreshState();
    // store?.resetSelectors();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have as title \'in\'', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('in');
  });

  it('should select customCards', () => {
    const result = selectCustomCards.projector(initialState.customCards);
    expect(result.length).toEqual(1);
    expect(result[0].id).toEqual('1hfmclpr1');
  });

  // it('should select customCards and be empty store', () => {
  //   store.setState([{
  //     creationDate: '2023-11-19',
  //     description: 'Des',
  //     id: '2223333',
  //     imageLink: 'Im',
  //     tags: ['tag'],
  //     title: 'Tit',
  //     videoLink: 'Link',
  //   }]);
  //   // store.refreshState();
  //   const result = selectCustomCards.projector(initialState.customCards);
  //   // expect(result.length).toEqual(0);
  //   expect(result[0].id).toEqual('2223333');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.header')?.textContent).toContain('in app is running!');
  // });
});
