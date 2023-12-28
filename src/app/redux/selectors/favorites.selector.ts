import { createFeatureSelector } from '@ngrx/store';
import { SearchItem } from 'src/app/shared/models/search-item.model';

export const selectFavorites = createFeatureSelector<ReadonlyArray<SearchItem>>('favorites');
