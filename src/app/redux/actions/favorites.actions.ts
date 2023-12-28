import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { SearchItem } from 'src/app/shared/models/search-item.model';

export const FavoritesActions = createActionGroup({
  source: 'Favorites',
  events: {
    'Get favorites': emptyProps(),
    'Add favorite': props<{ favorite: SearchItem }>(),
    'Remove favorite': props<{ id: string }>(),
  },
});
