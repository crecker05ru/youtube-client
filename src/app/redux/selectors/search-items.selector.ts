import { createFeatureSelector } from '@ngrx/store';
import { SearchItemsState } from '../reducers/search-items.reducer';

export const selectSearchItems = createFeatureSelector<SearchItemsState>('searchItems');
