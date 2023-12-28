import { createReducer, on } from '@ngrx/store';
import { SearchItem } from 'src/app/shared/models/search-item.model';
import { FavoritesActions } from '../actions/favorites.actions';

export const initialState: ReadonlyArray<SearchItem> = [];

export const FavoritesReducer = createReducer(
  initialState,
  on(FavoritesActions.getFavorites, () => {
    const favoritesState = JSON.parse(localStorage.getItem('favoritesState') || '');
    return favoritesState || [];
  }),
  on(FavoritesActions.addFavorite, (state, { favorite }) => {
    const newState = [...state, favorite];
    localStorage.setItem('favoritesState', JSON.stringify(newState));
    return newState;
  }),
  on(FavoritesActions.removeFavorite, (state, { id }) => {
    const newState = state.filter((favorite) => favorite.id !== id);
    localStorage.setItem('favoritesState', JSON.stringify(newState));
    return newState;
  }),
);
