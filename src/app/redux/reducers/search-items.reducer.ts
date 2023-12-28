import { createReducer, on } from '@ngrx/store';
import { SearchItem } from 'src/app/shared/models/search-item.model';
import { SearchItemsActions } from '../actions/search-items.actions';

export interface SearchItemsState {
  searchItems: SearchItem[]
  videos: SearchItem[]
  videoIds: {
    [id: string]: SearchItem
  }
  favorites: SearchItem[]
  favoritesIds: string[]
  coincidenceIds: string[];
}

export const initialState: SearchItemsState = {
  searchItems: [],
  videos: [],
  videoIds: {},
  favorites: [],
  favoritesIds: [],
  coincidenceIds: [],
};

export const SearchItemsReducer = createReducer(
  initialState,
  // on(SearchItemsActions.getSearchItems, (_state, { searchItems }) => searchItems),
  on(SearchItemsActions.getSearchItems, (state, { searchItems }) => {
    const favoritesState: SearchItem[] = JSON.parse(localStorage.getItem('favoritesState') || '[]') || [];
    const favoritesIdsState = JSON.parse(localStorage.getItem('favoritesIdsState') || '[]') || [];
    const videoIds = searchItems.map((item) => item.id);
    const favoritesIds = favoritesState.map((item) => item.id);
    const coincidences = favoritesIds.filter((id) => videoIds.includes(id));
    return {
      ...state,
      searchItems,
      favorites: favoritesState,
      favoriteIds: favoritesIdsState,
      coincidenceIds: coincidences,
      favoritesIds,
    };
  }),
  on(SearchItemsActions.getFavorites, (state) => {
    const favoritesState = JSON.parse(localStorage.getItem('favoritesState') || '');
    const favoritesIdsState: string[] = JSON.parse(localStorage.getItem('favoritesIdsState') || '');
    const newState = { ...state, favorites: [...state.favorites, favoritesState], favoriteIds: favoritesIdsState };
    return newState;
  }),
  on(SearchItemsActions.addFavorite, (state, { favorite }) => {
    const updatedFavorites = { ...state, favorites: [...state.favorites, favorite] };
    const updatedFavoritesIds = updatedFavorites.favorites.map((item) => item.id);
    const newState = { ...state, favorites: updatedFavorites.favorites, favoritesIds: updatedFavoritesIds };
    localStorage.setItem('favoritesState', JSON.stringify(newState.favorites));
    localStorage.setItem('favoritesIdsState', JSON.stringify(updatedFavoritesIds));
    return newState;
  }),
  on(SearchItemsActions.removeFavorite, (state, { id }) => {
    const updatedFavoritesIds = state.favorites.filter((item) => item.id !== id).map((item) => item.id);
    const updatedFavorites = state.favorites.filter((favorite) => favorite.id !== id);
    const newState = {
      ...state,
      favorites: updatedFavorites,
      favoritesIds: updatedFavoritesIds,
    };
    localStorage.setItem('favoritesState', JSON.stringify(newState.favorites));
    localStorage.setItem('favoritesIdsState', JSON.stringify(updatedFavoritesIds));
    return newState;
  }),
);
