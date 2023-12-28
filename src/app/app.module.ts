import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SearchItemComponent } from './features/components/search/search-item/search-item.component';
import { SearchResultComponent } from './features/components/search/search-result/search-result.component';
import { MainComponent } from './core/pages/main/main.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { FilterByKeywordsPipe } from './features/services/filterByKeywords.pipe';
import { DetailedInformationComponent } from './core/pages/detailed-information/detailed-information.component';
import { tokenInterceptorProvider } from './auth/services/token-interceptor.provider';
import { FavoriteComponent } from './core/pages/favorite/favorite.component';
import { FavoriteListComponent } from './favorite/components/favorite-list/favorite-list.component';
import { customCardsReducer } from './redux/reducers/customCards.reducer';
import { customCardsListReducer } from './redux/reducers/customCardsList.reducer';
import { SearchItemsReducer } from './redux/reducers/search-items.reducer';
import { FavoritesReducer } from './redux/reducers/favorites.reducer';
// import { VideoListComponent } from './favorite/components/video-list/video-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    FavoriteListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderComponent,
    SearchItemComponent,
    SearchResultComponent,
    MainComponent,
    PageNotFoundComponent,
    DetailedInformationComponent,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      customCards: customCardsReducer,
      customCardsList: customCardsListReducer,
      searchItems: SearchItemsReducer,
      favorites: FavoritesReducer,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [FilterByKeywordsPipe, tokenInterceptorProvider],
  bootstrap: [AppComponent],
  exports: [
    HeaderComponent,
    SearchItemComponent,
    SearchResultComponent,
  ],
})
export class AppModule { }
