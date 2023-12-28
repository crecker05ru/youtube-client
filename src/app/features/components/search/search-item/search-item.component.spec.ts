import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { SearchItem } from 'src/app/shared/models/search-item.model';
import { SearchItemComponent } from './search-item.component';

describe('SearchItemComponent', () => {
  let component: SearchItemComponent;
  let fixture: ComponentFixture<SearchItemComponent>;
  // let store: MockStore;
  const initialState = { loggedIn: false };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchItemComponent],
      providers: [provideMockStore({ initialState })],
    });
    const searchItem:SearchItem = {
      kind: 'youtube#video',
      etag: 'pMhhDszdhEf-IYVui2zORqICgAE',
      id: 'QNJL6nfu__Q',
      snippet: {
        publishedAt: '2009-10-03T04:50:06Z',
        channelId: 'UCulYu1HEIa7f70L2lYZWHOw',
        title: 'Michael Jackson - They Don’t Care About Us (Brazil Version) (Official Video)',
        description: "Music video by Michael Jackson performing They Don't Care About Us. (C) 1996",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/QNJL6nfu__Q/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/QNJL6nfu__Q/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/QNJL6nfu__Q/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/QNJL6nfu__Q/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/QNJL6nfu__Q/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'michaeljacksonVEVO',
        tags: [
          'Epic',
          'Michael Jackson',
          'Pop',
          "They Don't Care About Us",
        ],
        categoryId: '10',
        liveBroadcastContent: 'none',
        localized: {
          title: 'Michael Jackson - They Don’t Care About Us (Brazil Version) (Official Video)',
          description: "Music video by Michael Jackson performing They Don't Care About Us. (C) 1996",
        },
        defaultAudioLanguage: 'en-US',
      },
      statistics: {
        viewCount: '1048918216',
        likeCount: '8941305',
        favoriteCount: '0',
        commentCount: '354903',
        dislikeCount: '0',
      },
    };

    fixture = TestBed.createComponent(SearchItemComponent);
    component = fixture.componentInstance;
    component.item = searchItem;
    fixture.detectChanges();

    // store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    const el = fixture.nativeElement.querySelector('.search-item__inner');
    expect(el).toBeTruthy();
  });

  it('should create', () => {
    const el = fixture.nativeElement.querySelector('.search-item__button');
    expect(el.textContent).toBe('more...');
  });

  it('should create', () => {
    const el = fixture.nativeElement.querySelector('.search-item__title');
    expect(el.textContent).toBe(component?.item?.snippet.title);
  });

  it('should create', () => {
    const el = fixture.nativeElement.querySelector('.value__viewCount');
    expect(el.textContent).toBe(component?.item?.statistics.viewCount);
  });
  it('should create', () => {
    const el = fixture.nativeElement.querySelector('.value__likeCount');
    expect(el.textContent).toBe(component?.item?.statistics.likeCount);
  });
  it('should create', () => {
    const el = fixture.nativeElement.querySelector('.value__commentCount');
    expect(el.textContent).toBe(component?.item?.statistics.commentCount);
  });
});
